export {}

class Product {
    getProduct(name: string) {
        console.log(`${name}を取得しました`);
    }
}

class Payment {
    makePayment(name: string) {
        console.log(`${name}の支払いを行いました`);
    }
}

class Invoice {
    sendInvoice(name: string) {
        console.log(`${name}の請求書を送信しました`);
    }
}

class Order {
    placeOrder(name: string) {
        console.log("注文開始");

        const product = new Product();
        product.getProduct(name);

        const payment = new Payment();
        payment.makePayment(name);

        const invoice = new Invoice();
        invoice.sendInvoice(name);

        console.log("注文は正常に完了しました");
    }
}

function run() {
    const name = "デザインパターン本";
    const order = new Order();
    order.placeOrder(name);
}

run();
