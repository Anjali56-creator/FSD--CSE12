function placeOrder() {
  return new Promise((resolve) => {
    console.log("payment is in progress....");
    setTimeout(() => {
      console.log("order placed successfully");
      resolve("order placed");
    }, 3000);
  });
}

function preparingOrder() {
  return new Promise((resolve) => {
    console.log("order is being prepared");
    setTimeout(() => {
      console.log("order is ready");
      resolve("order ready");
    }, 3000);
  });
}

function pickupOrder() {
  return new Promise((resolve) => {
    console.log("order is out for delivery");
    setTimeout(() => {
      console.log("order delivered");
      resolve("delivered");
    }, 3000);
  });
}

async function ordering() {
  await placeOrder();
  await preparingOrder();
  const status = await pickupOrder();
  console.log("Final Status:", status);
}

ordering();
