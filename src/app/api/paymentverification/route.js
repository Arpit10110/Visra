import { NextResponse } from "next/server";
import crypto from "crypto";

export const POST = async (req) => {
    try {
        const {razorpay_payment_id, razorpay_order_id,razorpay_signature } = await req.json();
        console.log("Payment ID:", razorpay_payment_id);
        console.log("Order ID:", razorpay_order_id);
        console.log("Signature:", razorpay_signature);
        const generated_signature = crypto
            .createHmac("sha256", process.env.NEXT_PUBLIC_RazarPay_key_secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");
        const isPaymentValid = razorpay_signature === generated_signature;
        if (isPaymentValid) {
            return NextResponse.json({
                success: true,
                message:"Payment Successfully done",
                paymentId : razorpay_payment_id
            });
        } else {
            return NextResponse.json({
                success: true,
                message:"Payment fail done",
                paymentId : razorpay_payment_id
            });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message || "An error occurred during payment verification",
        });
    }
};
