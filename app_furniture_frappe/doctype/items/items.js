// Copyright (c) 2024, furniture and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Items", {
// 	refresh(frm) {

// 	},
// });


// Function to update the 'Total' field based on 'Count' and 'Price' fields
function updateTotal(frm) {
    // Check if both 'count' and 'price' fields have values
    if (frm.doc.count && frm.doc.price) {
        // Set the 'total' field to the product of 'count' and 'price'
        frm.set_value('total', frm.doc.count * frm.doc.price);
    } else {
        // Set the 'total' field to 0 if either field is missing or invalid
        frm.set_value('total', 0);
    }
}

// Attach the updateTotal function to the fields' change events
frappe.ui.form.on('Items', {
    count: function(frm) {
        updateTotal(frm);
    },
    price: function(frm) {
        updateTotal(frm);
    }
});
