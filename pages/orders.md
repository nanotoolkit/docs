# Orders [TODO]

[Purpose](#purpose)  
[Draft Orders vs. Finalized Orders](#draft-orders-vs-finalized-orders)   
[Putting Items in the Cart](#putting-items-in-the-cart)  
[Orders Table](#orders-table)  
[Order Detail](#order-detail)  
[Options](#options)  
[Output](#output)  
[Examples](#examples)  
[FAQ / Troubleshooting](#faq--troubleshooting)  

## Purpose
---
[TODO]

* Create orders to synthesize DNA for any number of designs
* Gouped by underlying scaffold
* View individual color-coded stocks
* Export data for automated pipetting workflows
* Organize order data into draft orders (processing) and finalized (completed)
* Review past orders with filters

<br>

## Draft Orders vs. Finalized Orders
---
Nanotoolkit can generate and track design orders the lab makes for real-world material. 
An order can be in one of two states during the ordering process:

* Draft
* Finalized

An order takes a few seconds (~10 seconds) for Nanotoolkit to generate the well layouts and other
pertinent order information. During this time the order will show up in the **Draft Orders - Processing** Table on the **Cart** page. 
Once Nanotoolkit has finished processing the designs and created all the necessary information, the order
will move from the Processing table to the **Draft Orders - Completed** table. At this point all the required information has been 
generated, and the lab technician can use this information to place an order with a vendor. While the order is waiting to be 
fulfilled, it will remain in the Draft Orders table for reference. Clicking the **order id** in the table will bring up details 
for the Draft Order. Finally, when the material has been received by the lab, the order is considered fulfilled. 
The user can enter a vendor number for the order, effectively marking it as "**Finalized**." 
This will move the order from the Draft Orders table to the **Orders** page, 
where all past fulfilled orders are tracked. 

<br>

### Finalizing an Order
To finalize a draft order after material has been received:
1. Find the order on the Cart page and select the **order id**.
![](../assets/img/orders-table-id.png)   



2. The **Order Detail** page will come up. Click the "Finalize" button in the top right corner.
![](../assets/img/order-finalize-button.png)


3. A dialog will pop up. Enter the Vendor Number associated with the order. 
This can be alphanumeric. The intent is to have a way to track the physical order in the lab. After entering
a vendor number and clicking **Enter**, a confirmation will pop up and the order will be moved to the 
**Orders** page. 
<img src="../assets/img/order-finalize-dialog.png" alt="drawing" width="400"/>   
<img src="../assets/img/order-finalize-confirmation.png" alt="drawing" width="400"/>
<br>


## Putting Items in the Cart
---
Items are placed in the Cart from the Projects page. After selecting a project,
all the designs for that project will be shown on the right side of the page. 
Only eligible designs will have an "**Add to Cart**" icon available at the far right of the design row.
Clicking this icon will add the design to the cart. Clicking it a second time will remove the item 
from the cart.

When a design has been added to the cart, it will also show up on the **Cart** page.



## Orders Table
---

<span style="color: red;">**TODO...**</span>  
![](../assets/img/scaffold-table.png)    


Draft Orders are listed in a table on the Cart page with the following columns:

* **ID** - Item ID in the database
* **Name** - Name of the scaffold, denoted in teh FASTA file, typically associated with the length
* **Uploader** - the team member that uploaded the scaffold
* **Length** - length of the sequence in terms of bases (e.g. "ATCG" = length of 4)
* **Status** - Signifies whether or not the scaffold is being used by any designs. If so, it will provide
  the number of designs using the scaffold. If not being used, it will allow the user to delete the scaffold
  if desired. Note: scaffolds can only be deleted if they are not being used by any designs.
* **FASTA** - Click to download the FASTA file for the scaffold
* **Sequence** - Click to copy the sequence to the clipboard



## Order Detail
---
Each order has several ...




## Options
---
There are several customizable options available when running an Autobreak. 
These are separated into three sections: **Break Rules**, **Length Settings**, and **Additional Rules**.



## Output
---
<br>


## Examples
---
<br>


## FAQ / Troubleshooting
---
<br>



