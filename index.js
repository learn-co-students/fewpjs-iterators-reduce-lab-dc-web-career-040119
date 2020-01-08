// an array of the total number of batteries across several batches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Objective: add together all of the batches for one grand total
// use .reduce to add each batch the the total number before it,
//then move on to the next batch
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0)
