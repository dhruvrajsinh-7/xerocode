import { connect } from "@/dbconnect/dbconnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { sendEmail } from "@/helpers/mailservice";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    if (!process.env.TOKEN_SECRET) {
      return NextResponse.json(
        { error: "TOKEN_SECRET environment variable is not set" },
        { status: 500 }
      );
    }

    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_SECRET as Secret
    ) as JwtPayload;

    if (!decodedToken.id) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 400 }
      );
    }

    const user = await User.findById(decodedToken.id);

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    if (!user.isVerified) {
      return NextResponse.json(
        {
          error:
            "Email not verified. Please verify your email to access the wishlist feature.",
        },
        { status: 403 }
      );
    }

    try {
      await sendEmail({ email: user.email, emailType: "WISHLIST" });

      return NextResponse.json({
        message: "Wishlist email sent successfully",
        success: true,
      });
    } catch (error: any) {
      return NextResponse.json(
        { error: "Failed to send wishlist email. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
