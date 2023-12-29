const coffeeShop = {
    name: "Gustea",
    menus: {
        signature_tea: 5,
        milk_tea: 3,
        cireng: 10,
        gorengan: 5,
    },
    orderA(menuItem, quantity) {
        // Periksa apakah menu ada dalam daftar
        if (this.menus.hasOwnProperty(menuItem)) {
            // Periksa apakah stok mencukupi
            if (this.menus[menuItem] >= quantity) {
                // Kurangi stok menu
                this.menus[menuItem] -= quantity;
                console.log(`Pesanan diterima: ${quantity} ${menuItem}. Sisa stok ${menuItem}: ${this.menus[menuItem]}`);
            } else {
                console.log(`Maaf, stok ${menuItem} tidak mencukupi.`);
            }
        } else {
            console.log(`Menu ${menuItem} tidak tersedia.`);
        }
    }
};

// Contoh penggunaan
coffeeShop.orderA("signature_tea", 2);
coffeeShop.orderA("gorengan", 3);
coffeeShop.orderA("cappuccino", 1); // Menu tidak tersedia
coffeeShop.orderA("milk_tea", 8); // Stok tidak mencukupi
