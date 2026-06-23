const express = require("express");

const router = express.Router();

const {

    createInquiry,
    getAllInquiries

} = require("../controllers/inquiryController");

router.post("/", createInquiry);

router.get("/all", getAllInquiries);

module.exports = router;