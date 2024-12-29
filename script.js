// import fetch from "node-fetch";
// import { Command } from "commander";

// const program = new Command();

// program
//   .argument("<citiName>", "City Name to get the weather for ")
//   .action(async (cityName) => {
//     const Mykey = "edca1d5999554a237b2f031af616e61c";
//     const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Mykey}`;
//     try {
//       const response = await fetch(fetchUrl);
//       const data = await response.json();
//       const temperature = data.main.temp;

//       console.log(` temperature in ${cityName} is ${temperature} celsius`);
//     } catch (error) {
//       console.error("error fetch data", error.message);
//     }
//   });

// program.parse();


// homework 2






// import { Command } from "commander";
// import fs from "fs/promises";
// const program = new Command();

// async function readFile() {
//   try {
//     const read = await fs.readFile("expenses.json", "utf-8");
//     return JSON.parse(read);
//   } catch (err) {
//     return [];
//   }
// }

// async function writeFile(data) {
//   await fs.writeFile("expenses.json", JSON.stringify(data, null, 2));
// }

// program
//   .command("Add")
//   .option("--food <name>")
//   .option("--amount <amount>")
//   .action(async (opts) => {
//     const expenses = await readFile();
//     const newExpenses = {
//       id: expenses.length + 1,
//       name: opts.food,
//       amount: parseFloat(opts.amount),
//     };
//     expenses.push(newExpenses);
//     await writeFile(expenses);
//     console.log(`Name- ${opts.food} Amount ${opts.amount}`);
//     console.log(expenses.length);
//   });

// program.command("Show").action(async (opts) => {
//   const expenses = await readFile();
//   console.log(expenses);
// });

// program.command("Delete").option("--id <id>").action(async (opts) => {
//   const expenses = await readFile();
//   const index = expenses.findIndex(exp => exp.id=opts.id)
//   if (index !== -1) {
    
//     expenses.splice(index, 1);
//     await writeFile(expenses);  
//     console.log(`removed id ${opts.id}`);
//   } else {
//     console.log(` id  ${opts.id} not found.`);
//   }
// });


// program.parse();
