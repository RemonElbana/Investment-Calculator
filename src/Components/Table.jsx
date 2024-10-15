import { calculateInvestmentResults , formatter } from "../util/investment"

export default function Table({input}) {
    console.log(input)
    let calculator = calculateInvestmentResults(input)
    const initialInterest = calculator[0].valueEndOfYear - calculator[0].interest - calculator[0].annualInvestment 

    let final =
        (calculator.map( ( yearDuration )  => {
            const totalInterest = yearDuration.valueEndOfYear - yearDuration.annualInvestment * yearDuration.year - initialInterest
            const finalInvested = yearDuration.valueEndOfYear - initialInterest
            return (
                <tr key={yearDuration.year} >
                    <td> {yearDuration.year} </td>
                    <td> {formatter.format(yearDuration.valueEndOfYear)} </td>
                    <td> {formatter.format(yearDuration.interest)} </td>
                    <td> {formatter.format(totalInterest)} </td>
                    <td> {formatter.format(finalInvested)} </td>
                </tr>
            )
        } )
    )


    return (
        <div className="container">
            <table id="result" >
                <thead className="center" >
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {final}
                </tbody>
            </table>
        </div>
    )
}