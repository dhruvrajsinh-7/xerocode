// pages/api/user/emailstatus/route.ts
import { connect } from "@/app/api/dbconnect/dbconnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    await connect();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    console.log(user.isVerified);
    if (!user.isVerified) {
      return NextResponse.json(
        { error: "Email not verified" },
        { status: 400 }
      );
    }

    // If the email is verified, you can return a success response
    return NextResponse.json({ message: "Email is verified", success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
