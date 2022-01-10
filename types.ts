type Fee = {
  amount: number
  remark: string
}

type Address = {
  line1: string
  line2: string
}

export type ReceiptProps = {
  invoiceNumber: number
  invoiceDate: Date
  name: string
  class: string
  address: Address
  mobileNumber: string
  emailId: string
  pinCode: number
  state: string
  admissionFee: Fee
  tuitionFee: Fee
  otherFee: Fee
  examinationFee: Fee
  annualFee: Fee
  lateMiscFee: Fee
  paymentMethodNumber: string
  paymentMethodDate: Date
  branchName: string
}
