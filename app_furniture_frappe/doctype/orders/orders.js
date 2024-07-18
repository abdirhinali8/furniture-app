// Copyright (c) 2024, furniture and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Orders", {
// 	refresh(frm) {

// 	},
// });


// Function to update the 'Total' field based on 'Count' and 'Price' fields
// Function to update the 'Total' field in Order Table rows based on 'Quantity' and 'Price' fields
function updateRowTotal(frm, cdt, cdn) {
    var row = locals[cdt][cdn];
    if (row.quantity && row.price) {
        frappe.model.set_value(cdt, cdn, 'total', row.quantity * row.price);
    } else {
        frappe.model.set_value(cdt, cdn, 'total', 0);
    }
}

// Attach the updateRowTotal function to the fields' change events in Order Table
frappe.ui.form.on('Order Table', {
    quantity: function(frm, cdt, cdn) {
        updateRowTotal(frm, cdt, cdn);
    },
    price: function(frm, cdt, cdn) {
        updateRowTotal(frm, cdt, cdn);
    }
});
