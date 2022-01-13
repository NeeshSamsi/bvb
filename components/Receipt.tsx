import type { ReceiptMaxOutput } from "../types"

import Image from "next/image"
import LogoText from "../assets/LogoText.png"

const Receipt = ({ receipt }: { receipt: ReceiptMaxOutput[] }) => {
  const {
    id,
    invoiceNumber,
    date,
    name,
    class: receiptClass,
    addressLine1,
    addressLine2,
    mobileNumber,
    emailId,
    pinCode,
    state,
    admissionFee,
    admissionFeeRemark,
    tuitionFee,
    tuitionFeeRemark,
    otherFee,
    otherFeeRemark,
    examinationFee,
    examinationFeeRemark,
    annualFee,
    annualFeeRemark,
    lateMiscFee,
    lateMiscFeeRemark,
    totalFee,
    receivedBy,
    totalInWords,
    paymentMethod,
    paymentNumber,
    dateOnPayment,
    branch,
  } = receipt[0]
  const receiptDate = new Date(date!)
  const paymentDate = new Date(dateOnPayment!)

  return (
    <div className="max-w-4xl mx-auto border-2 border-slate-800">
      <div className="flex flex-col items-center justify-center space-y-2 h-32 border-b border-slate-800">
        <Image
          src={LogoText}
          className="h-full w-full grayscale"
          alt="Bharatiya Vidya Bhavan's Logo Mark"
        />
        <h2 className="uppercase font-bold text-xl">
          Bharatiya Sangeet and Nartan Shikshapeeth
        </h2>
      </div>

      <div className="text-center text-sm py-2 border-b border-slate-800">
        <p>
          Munshi Sadan, Kulapati K. M. Munshi Marg, Chowpatty, Mumbai - 400007,
          Maharashtra, India.
        </p>
        <p>Tel. : 022-23631261 · E-mail : bhavansangeet@gmail.com</p>
        <h4 className="font-bold text-lg uppercase">GSTIN : 27AAATB1693E1ZX</h4>
      </div>

      <div className="py-2 border-b border-slate-800">
        <h4 className="font-bold text-lg text-center">
          Invoice cum Bill of Invoice
        </h4>
      </div>

      <div className="grid grid-cols-1/3/1 text-sm">
        <div className="border-r border-b border-slate-800 font-bold py-2 px-4">
          Invoice No. :
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">
          SNS/
          <span className="font-bold">{invoiceNumber}</span>
        </div>
        <div className="border-b border-slate-800 font-bold py-2 px-4">
          Date :{" "}
          <span className="font-normal">
            {receiptDate.getDate()}/{receiptDate.getMonth() + 1}/
            {receiptDate.getFullYear()}
          </span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-2 px-4">
          Name :
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">
          {name}
        </div>
        <div className="border-b border-slate-800 font-bold py-2 px-4">
          Class : <span className="font-normal">{receiptClass}</span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-2 px-4">
          Address :
        </div>
        <div className="col-span-2 border-b border-slate-800 py-2 px-4">
          {addressLine1}
        </div>

        <div className="col-span-3 border-b border-slate-800 py-2 px-4">
          {addressLine2}
        </div>
      </div>

      <div className="grid grid-cols-2 text-sm">
        <div className="border-r border-b border-slate-800 font-bold py-2 px-4">
          Mobile No. : <span className="font-normal">{mobileNumber}</span>
        </div>
        <div className="border-b border-slate-800 font-bold py-2 px-4">
          Email ID. : <span className="font-normal">{emailId}</span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-2 px-4">
          Pin Code : <span className="font-normal">{pinCode}</span>
        </div>
        <div className="border-b border-slate-800 font-bold py-2 px-4">
          State : <span className="font-normal">{state}</span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-2 px-4">
          State of Supply :
          <span className="font-normal uppercase"> Maharashtra</span>
        </div>
        <div className="border-b border-slate-800 font-bold py-2 px-4">
          GSTIN :<span className="font-normal"></span>
        </div>
      </div>

      <div className="grid grid-cols-1/4/1/3 text-sm">
        <div className="border-r border-b border-slate-800 font-bold py-2 px-4">
          Sr. No.
        </div>
        <div className="border-r border-b border-slate-800 font-bold uppercase text-center py-2">
          Description
        </div>
        <div className="border-r border-b border-slate-800 font-bold uppercase text-center py-2">
          HSN / SAC
        </div>
        <div className="border-b border-slate-800 font-bold text-center py-2">
          Total Amount
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">1</div>
        <div className="border-r border-b border-slate-800 text-left py-2 px-4 grid grid-cols-1/2">
          <div>Admission Fee</div>
          <div className="italic">(Remark - {admissionFeeRemark})</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-2">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-2">
          ₹{admissionFee}
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">2</div>
        <div className="border-r border-b border-slate-800 text-left py-2 px-4 grid grid-cols-1/2">
          <div>Tuition Fee</div>
          <div className="italic">(Remark - {tuitionFeeRemark})</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-2">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-2">
          ₹{tuitionFee}
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">3</div>
        <div className="border-r border-b border-slate-800 text-left py-2 px-4 grid grid-cols-1/2">
          <div>Other Fee</div>
          <div className="italic">(Remark - {otherFeeRemark})</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-2">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-2">
          ₹{otherFee}
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">4</div>
        <div className="border-r border-b border-slate-800 text-left py-2 px-4 grid grid-cols-1/2">
          <div>Examination Fee</div>
          <div className="italic">(Remark - {examinationFeeRemark})</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-2">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-2">
          ₹{examinationFee}
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">5</div>
        <div className="border-r border-b border-slate-800 text-left py-2 px-4 grid grid-cols-1/2">
          <div>Annual Fee</div>
          <div className="italic">(Remark - {annualFeeRemark})</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-2">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-2">
          ₹{annualFee}
        </div>
        <div className="border-r border-b border-slate-800 py-2 px-4">6</div>
        <div className="border-r border-b border-slate-800 text-left py-2 px-4 grid grid-cols-1/2">
          <div>Late / Misc. Fee</div>
          <div className="italic">(Remark - {lateMiscFeeRemark})</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-2">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-2">
          ₹{lateMiscFee}
        </div>

        <div className="border-r border-b border-slate-800 py-2 px-4"></div>
        <div className="border-r border-b border-slate-800 text-center py-2"></div>
        <div className="border-r border-b border-slate-800 text-center font-bold py-2">
          Total Rs.
        </div>
        <div className="border-b border-slate-800 text-center py-2 font-bold">
          ₹{totalFee}
        </div>

        <div className="border-r border-b border-slate-800 py-2 px-4"></div>
        <div className="border-r border-b border-slate-800 text-center py-2"></div>
        <div className="border-r border-b border-slate-800 text-center font-bold py-2">
          Taxable Amount
        </div>
        <div className="border-b border-slate-800 text-center font-bold py-2">
          NIL
        </div>

        <div className="border-slate-800 text-right font-bold py-2 px-4">
          Note:
        </div>
        <div className="border-r border-slate-800 text-left py-2 px-4">
          Please prepare cheque in favour of
        </div>
        <div className="border-r border-slate-800 text-center font-bold uppercase py-2">
          SGST - NIL
        </div>
        <div className="border-slate-800 text-center font-bold py-2"></div>

        <div className="border-b border-slate-800 text-right font-bold py-2 px-4"></div>
        <div className="border-r border-b border-slate-800 text-left font-bold py-2 px-4">
          Bharatiya Vidya Bhavan
        </div>
        <div className="border-r border-b border-slate-800 text-center font-bold uppercase py-2">
          CGST - NIL
        </div>
        <div className="border-b border-slate-800 text-center font-bold py-2"></div>
      </div>

      <div className="p-2 text-sm">
        <p>
          Received with thanks from Shri / Smt. / Kum.{" "}
          <span className="font-bold">{receivedBy}</span>, the sum of Rupees{" "}
          <span className="font-bold">{totalInWords}</span> /- by{" "}
          {paymentMethod} No. <span className="font-bold">{paymentNumber}</span>
          . Dated{" "}
          <span className="font-bold">
            {paymentDate.getDate()}/{paymentDate.getMonth() + 1}/
            {paymentDate.getFullYear()}
          </span>{" "}
          drawn on <span className="font-bold">{branch}</span> Branch towards
          Invoices No.{" "}
          <span className="font-bold">{invoiceNumber?.split("/")[0]}</span>
        </p>
      </div>

      <div className="flex justify-center space-x-24 py-6">
        <div className="w-48 flex items-center flex-col">
          <div className="text-base font-bold font-serif">Kavita Samsi</div>
          <div className="w-full h-px bg-slate-800"></div>
          <p className="text-sm">Received by</p>
        </div>
        <div className="w-48 flex items-center flex-col">
          <div className="text-base font-bold font-serif">
            Meera Chikhalikar
          </div>
          <div className="w-full h-px bg-slate-800"></div>
          <p className="text-sm">Principal</p>
        </div>
      </div>
    </div>
  )
}

export default Receipt
