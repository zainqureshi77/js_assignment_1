    
         var customerName = prompt("Enter the customer's name:");

        
         var shirt = +prompt('shirt price','1000 - 2000 - 3000')
         var paint = +prompt('paint price','1500 - 2000 - 3000')
         var trouser = +prompt('trouser price','1500 - 2000 - 2500')
         var T_shirt = +prompt('T_shirt price','1200 - 1500 - 1800')
         var track_suit = +prompt('track_suit price','1800 - 2500 - 3500')
         var short = +prompt('short price','1500 - 2000 - 2500')

    
        var totalAmount = shirt + paint + trouser + T_shirt + track_suit + short;

    
        var discount = 0;
        if (totalAmount > 4000) {
            discount = 10;
        } else if (totalAmount > 3500) {
            discount = 7;
        } else if (totalAmount > 3000) {
            discount = 5;
        } else if (totalAmount > 2500) {
            discount = 3;
        }

        var discountAmount = (totalAmount * discount) / 100;
        var finalAmount = totalAmount - discountAmount;

        document.write(`<h2 align='center'>Customer Shopping Details</h2>`);
        document.write(`<table>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Items</th>
                    <th>Total Amount</th>
                    <th>Discount (%)</th>
                    <th>Discount Amount</th>
                    <th>Final Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${customerName}</td>
                    <td>
                        <ul>
                            ${shirt ? `<li>shirt price ${shirt.toFixed(2)}</li>` : ""}
                            ${paint ? `<li>paint price ${paint.toFixed(2)}</li>` : ""}
                            ${trouser ? `<li>trouser price ${trouser.toFixed(2)}</li>` : ""}
                            ${T_shirt ? `<li>T_shirt price ${T_shirt.toFixed(2)}</li>` : ""}
                            ${track_suit ? `<li>track_suit price ${track_suit.toFixed(2)}</li>` : ""}
                            ${short ? `<li>short price ${short.toFixed(2)}</li>` : ""}
                        </ul>
                    </td>
                    <td>Rs. ${totalAmount.toFixed(2)}</td>
                    <td>${discount}%</td>
                    <td>Rs. ${discountAmount.toFixed(2)}</td>
                    <td>Rs. ${finalAmount.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>`);
        document.write(`<h2 align='center'>Thanks For Shopping, <i>${customerName}</h2>`)