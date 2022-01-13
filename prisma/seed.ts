import { Prisma, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const receipts: Prisma.ReceiptCreateInput[] = [
  {
    invoiceNumber: "21-22/165",
    date: new Date(),
    name: "Neesh",
    class: "Meera Vocal",
    addressLine1: "data Address Line 1",
    addressLine2: "data Address Line 1",
    mobileNumber: "+91 12345 12345",
    emailId: "neesh@samsi.com",
    pinCode: 400007,
    state: "Maha",
    admissionFee: 10.0,
    admissionFeeRemark: "admission Remark",
    tuitionFee: 20.0,
    tuitionFeeRemark: "tuition Remark",
    otherFee: 30.0,
    otherFeeRemark: "other Remark",
    examinationFee: 40.0,
    examinationFeeRemark: "exam Remark",
    annualFee: 50.0,
    annualFeeRemark: "annual Remark",
    lateMiscFee: 60.0,
    lateMiscFeeRemark: "late misc Remark",
    totalFee: 1000.0,
    receivedBy: "Neesh",
    totalInWords: "A lot of money",
    paymentMethod: "Cheque",
    paymentNumber: "CHEQUE-12345-ID",
    dateOnPayment: new Date(),
    branch: "Hughes Road",
  },
  {
    invoiceNumber: "21-22/166",
    date: new Date(),
    name: "Avaneesh",
    class: "Vaibhav Tabla",
    addressLine1: "nsh Address Line 1",
    addressLine2: "nsh Address Line 1",
    mobileNumber: "+91 12345 12345",
    emailId: "nsh@neeshsamsi.com",
    pinCode: 400010,
    state: "Maharashtra",
    admissionFee: 10.0,
    admissionFeeRemark: "admission Remark",
    tuitionFee: 20.0,
    tuitionFeeRemark: "tuition Remark",
    otherFee: 30.0,
    otherFeeRemark: "other Remark",
    examinationFee: 40.0,
    examinationFeeRemark: "exam Remark",
    annualFee: 50.0,
    annualFeeRemark: "annual Remark",
    lateMiscFee: 60.0,
    lateMiscFeeRemark: "late misc Remark",
    totalFee: 1000.0,
    receivedBy: "Avaneesh",
    totalInWords: "A lot of moniezzz",
    paymentMethod: "Cash",
    paymentNumber: "CHEQUE-12345-ID",
    dateOnPayment: new Date(),
    branch: "Gamdevi",
  },
  {
    invoiceNumber: "21-22/167",
    date: new Date(),
    name: "Kavita",
    class: "Tushar Sitar",
    addressLine1: "kav Address Line 1",
    addressLine2: "kav Address Line 1",
    mobileNumber: "+91 12345 12345",
    emailId: "kav@samsi.com",
    pinCode: 400005,
    state: "MAHA",
    admissionFee: 10.0,
    admissionFeeRemark: "admission Remark",
    tuitionFee: 20.0,
    tuitionFeeRemark: "tuition Remark",
    otherFee: 30.0,
    otherFeeRemark: "other Remark",
    examinationFee: 40.0,
    examinationFeeRemark: "exam Remark",
    annualFee: 50.0,
    annualFeeRemark: "annual Remark",
    lateMiscFee: 60.0,
    lateMiscFeeRemark: "late misc Remark",
    totalFee: 1000.0,
    receivedBy: "Kavita",
    totalInWords: "Moniezz",
    paymentMethod: "DD",
    paymentNumber: "DD-12345-ID",
    dateOnPayment: new Date(),
    branch: "data Branch Name",
  },
]

async function main() {
  const receipt1 = await prisma.receipt.create({ data: receipts[0] })

  const receipt2 = await prisma.receipt.create({ data: receipts[1] })

  const receipt3 = await prisma.receipt.create({ data: receipts[2] })

  console.log({ receipt1, receipt2, receipt3 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
