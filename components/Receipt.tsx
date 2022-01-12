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
    tuitionFee,
    otherFee,
    examinationFee,
    annualFee,
    lateMiscFee,
    totalFee,
    receivedBy,
    totalInWords,
    paymentMethod,
    dateInWords,
    branch,
  } = receipt[0]
  const receiptDate = new Date(date!)

  return (
    <div className="max-w-4xl mx-auto border border-slate-800">
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
        <div className="border-r border-b border-slate-800 font-bold py-1 px-2">
          Invoice No. :
        </div>
        <div className="border-r border-b border-slate-800 py-1 px-2">
          SNS/
          <span className="font-bold">{invoiceNumber}</span>
        </div>
        <div className="border-b border-slate-800 font-bold py-1 px-2">
          Date :{" "}
          <span className="font-normal">
            {receiptDate.getDate()}/{receiptDate.getMonth() + 1}/
            {receiptDate.getFullYear()}
          </span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-1 px-2">
          Name :
        </div>
        <div className="border-r border-b border-slate-800 py-1 px-2">
          {name}
        </div>
        <div className="border-b border-slate-800 font-bold py-1 px-2">
          Class : <span className="font-normal">{receiptClass}</span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-1 px-2">
          Address :
        </div>
        <div className="col-span-2 border-b border-slate-800 py-1 px-2">
          {addressLine1}
        </div>

        <div className="col-span-3 border-b border-slate-800 py-1 px-2">
          {addressLine2}
        </div>
      </div>

      <div className="grid grid-cols-2 text-sm">
        <div className="border-r border-b border-slate-800 font-bold py-1 px-2">
          Mobile No. :<span className="font-normal"></span>
        </div>
        <div className="border-b border-slate-800 font-bold py-1 px-2">
          Email ID. :<span className="font-normal"></span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-1 px-2">
          Pin Code :<span className="font-normal"></span>
        </div>
        <div className="border-b border-slate-800 font-bold py-1 px-2">
          State :<span className="font-normal"></span>
        </div>

        <div className="border-r border-b border-slate-800 font-bold py-1 px-2">
          State of Supply :
          <span className="font-normal uppercase"> Maharashtra</span>
        </div>
        <div className="border-b border-slate-800 font-bold py-1 px-2">
          GSTIN :<span className="font-normal"></span>
        </div>
      </div>

      <div className="grid grid-cols-1/4/1/3 text-sm">
        <div className="border-r border-b border-slate-800 font-bold py-1 px-2">
          Sr. No.
        </div>
        <div className="border-r border-b border-slate-800 font-bold uppercase text-center py-1">
          Description
        </div>
        <div className="border-r border-b border-slate-800 font-bold uppercase text-center py-1">
          HSN / SAC
        </div>
        <div className="border-b border-slate-800 font-bold text-center py-1">
          Total Amount
        </div>
        <div className="border-r border-b border-slate-800 py-1 px-2">1</div>
        <div className="border-r border-b border-slate-800 text-left py-1 px-2 grid grid-cols-1/2">
          <div>Admission Fee</div>
          <div className="italic">(Remark - Jan to Mar)</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-1">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-1"></div>
        <div className="border-r border-b border-slate-800 py-1 px-2">2</div>
        <div className="border-r border-b border-slate-800 text-left py-1 px-2 grid grid-cols-1/2">
          <div>Tuition Fee</div>
          <div className="italic">(Remark)</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-1">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-1"></div>
        <div className="border-r border-b border-slate-800 py-1 px-2">3</div>
        <div className="border-r border-b border-slate-800 text-left py-1 px-2 grid grid-cols-1/2">
          <div>Other Fee</div>
          <div className="italic">(Remark)</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-1">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-1"></div>
        <div className="border-r border-b border-slate-800 py-1 px-2">4</div>
        <div className="border-r border-b border-slate-800 text-left py-1 px-2 grid grid-cols-1/2">
          <div>Examination Fee</div>
          <div className="italic">(Test)</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-1">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-1"></div>
        <div className="border-r border-b border-slate-800 py-1 px-2">5</div>
        <div className="border-r border-b border-slate-800 text-left py-1 px-2 grid grid-cols-1/2">
          <div>Annual Fee</div>
          <div className="italic">(Remark)</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-1">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-1"></div>
        <div className="border-r border-b border-slate-800 py-1 px-2">6</div>
        <div className="border-r border-b border-slate-800 text-left py-1 px-2 grid grid-cols-1/2">
          <div>Late / Misc. Fee</div>
          <div className="italic">(Remark)</div>
        </div>
        <div className="border-r border-b border-slate-800 text-center py-1">
          9996
        </div>
        <div className="border-b border-slate-800 text-center py-1"></div>

        <div className="border-r border-b border-slate-800 py-1 px-2"></div>
        <div className="border-r border-b border-slate-800 text-center py-1"></div>
        <div className="border-r border-b border-slate-800 text-center font-bold py-1">
          Total Rs.
        </div>
        <div className="border-b border-slate-800 text-center py-1"></div>

        <div className="border-r border-b border-slate-800 py-1 px-2"></div>
        <div className="border-r border-b border-slate-800 text-center py-1"></div>
        <div className="border-r border-b border-slate-800 text-center font-bold py-1">
          Taxable Amount
        </div>
        <div className="border-b border-slate-800 text-center font-bold py-1">
          NIL
        </div>

        <div className="border-slate-800 text-right font-bold py-1 px-2">
          Note:
        </div>
        <div className="border-r border-slate-800 text-left py-1 px-2">
          Please prepare cheque in favour of
        </div>
        <div className="border-r border-slate-800 text-center font-bold uppercase py-1">
          SGST - NIL
        </div>
        <div className="border-slate-800 text-center font-bold py-1"></div>

        <div className="border-b border-slate-800 text-right font-bold py-1 px-2"></div>
        <div className="border-r border-b border-slate-800 text-left font-bold py-1 px-2">
          Bharatiya Vidya Bhavan
        </div>
        <div className="border-r border-b border-slate-800 text-center font-bold uppercase py-1">
          CGST - NIL
        </div>
        <div className="border-b border-slate-800 text-center font-bold py-1"></div>
      </div>

      <div className="p-2 text-sm">
        <p>
          Received with thanks from Shri / Smt. / Kum.{" "}
          <span className="font-bold">Name</span>, the sum of Rupees{" "}
          <span className="font-bold">Total amount in words</span> /- by Cash /
          Cheque / D.D. No. <span className="font-bold">Number</span>. Dated{" "}
          <span className="font-bold">Date on cheque</span> drawn on{" "}
          <span className="font-bold">Name</span> Branch towards Invoices No.{" "}
          <span className="font-bold">Invoice Number Years</span>
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
