import { Toggle } from "./toggle/Toggle";

export default function ToDoCard() {
    return (
      <div className="bg-slate-800 border rounded-md p-5">
        <div className="flex justify-between pb-6">
            <div className="text-white text-lg font-semibold">Molsdkjsjc sit sajkf</div>
            <div className="bg-black text-white border font-light rounded-full px-3 py-1">January 1st, 2021</div>
        </div>
        <div className="text-white pb-8">
            Loerwkjbdksjj dsjvbdvkc wujdvs, siukjvb kjsdbvsacashcb. Mjsabfs sjafbsj sjacbscjkasbc jsba, skjcbsd, asckjbsajajkckjsnca. My sdjkbv dshvbd sjcbsdc
        </div>
        <div className="flex justify-between pb-2">
            <div className="grid grid-cols-8">
                <div>
                    <Toggle /> 
                </div>
                <div className="text-white pt-1">In Progress</div>
            </div>
            <div><button className="bg-lime-500 text-white rounded font-medium px-3 py-1 ">MARK COMPLETE</button></div>
        </div>
      </div>
    )
  }