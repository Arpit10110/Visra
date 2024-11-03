import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    profile: { type: String },
    classify: { type: String },
    year: { type: Number },
    token: { type: Boolean },
    assistance: { type: Boolean },
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
});

const PriceSchema = new mongoose.Schema({
    dscprice: { type: Number, required: true },
    assprice: { type: Number, required: true },
    tokenprice: { type: Number, required: true },
    gst: { type: Number, required: true },
    totalprice: { type: Number, required: true },
});

const Oraganization = new mongoose.Schema({
    departmentname: { type: String, required: true },
    orgname: { type: String, required: true },
    orgtype: { type: String, required: true },
    gstno: { type: String, required: true },
});

const Schema = new mongoose.Schema({
    order: { type: OrderSchema, required: true },
    user: { type: UserSchema, required: true },
    price: { type: PriceSchema, required: true },
    oragdetail: { type: Oraganization, required: true },
    paymentid:{ type: String, required: true}
})

const OrgOrderModel = mongoose.models.OrganizationOrderModel || mongoose.model('OrganizationOrderModel', Schema);
export default OrgOrderModel;