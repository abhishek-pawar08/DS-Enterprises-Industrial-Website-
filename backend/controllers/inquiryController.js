const Inquiry = require("../models/Inquiry");
const nodemailer = require("nodemailer");

exports.createInquiry = async(req,res) => {

    try{

        const inquiry = await Inquiry.create(req.body);

        /* EMAIL */

        const transporter = nodemailer.createTransport({

            service:"gmail",

            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }

        });

        const mailOptions = {

            from:process.env.EMAIL_USER,

            to:"dsenterprises.0725@gmail.com",

            subject:"New Packaging Inquiry",

            html:`

            <h2>New Inquiry Received</h2>

            <p><b>Name:</b> ${req.body.name}</p>

            <p><b>Email:</b> ${req.body.email}</p>

            <p><b>Phone:</b> ${req.body.phone}</p>

            <p><b>Product:</b> ${req.body.product}</p>

            <p><b>Quantity:</b> ${req.body.quantity}</p>

            <p><b>Message:</b> ${req.body.message}</p>

            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success:true,
            message:"Inquiry Submitted Successfully",
            inquiry
        });

    }

    catch(error){

        res.status(500).json({
            success:false,
            error:error.message
        });

    }

}
exports.getAllInquiries = async(req,res)=>{

    try{

        const inquiries = await Inquiry.find()
        .sort({createdAt:-1});

        res.status(200).json(inquiries);

    }

    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

}