
# Investment Calculator

## Overview
The **Investment Calculator** is a tool to estimate the growth of an investment over time. It takes into account initial investments, recurring annual investments, the expected annual return, and the total investment duration. The output provides a year-by-year breakdown of investment value, interest earned, total interest, and invested capital.

## Features
- Input fields for initial investment, annual investment, expected rate of return, and investment duration.
- Yearly breakdown of:
  - **Investment value**: The total value of the investment at the end of each year.
  - **Interest (year)**: The interest earned in that particular year.
  - **Total interest**: The cumulative interest earned by the end of the year.
  - **Invested capital**: The total amount invested (initial + annual investments) up to that point.

## Inputs

1. **Initial Investment** (`initialInvestment`)
   - The initial amount invested at the start.
   - Example: Rp 1,000,000

2. **Annual Investment** (`annualInvestment`)
   - The amount added to the investment every year.
   - Example: Rp 500,000

3. **Expected Return** (`expectedReturn`)
   - The expected annual rate of return (as a percentage).
   - Example: 5%

4. **Duration** (`duration`)
   - The number of years the investment will grow.
   - Example: 10 years

## Output

The calculator will output the following data for each year:

1. **Year**
   - The current year in the investment duration.
   
2. **Investment Value**
   - The total value of the investment at the end of the year, including the initial investment, annual investments, and any interest earned.

3. **Interest (Year)**
   - The interest earned in that particular year based on the previous year's total investment value and the expected return.

4. **Total Interest**
   - The cumulative interest earned from the start of the investment up to the current year.

5. **Invested Capital**
   - The total amount of money invested (initial + annual investments) by the end of each year.

## Example Output

| Year | Investment Value | Interest (Year) | Total Interest | Invested Capital |
|------|------------------|-----------------|----------------|------------------|
| 1    | $15,350           | $350            | $350           | $15,000          |
| 2    | $31,045           | $1,045          | $1,395         | $30,000          |
| 3    | $47,118           | $2,073          | $3,468         | $45,000          |
| ...  | ...               | ...             | ...            | ...              |

## How to Use

1. Input the following values:
   - **Initial Investment**
   - **Annual Investment**
   - **Expected Return (as a percentage)**
   - **Duration (in years)**

2. The calculator will compute and display the investment growth over time, showing you how your capital grows with compounded interest.

## Demo



## License
This project is licensed under the MIT License.
