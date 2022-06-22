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


## Draft Orders vs. Finalized Orders
---
Orders that have been completed and finalized (actual synthesized DNA has been delivered to the lab)
are tracked on the Orders page. Until an order has been finalized it is treated as a Draft Order, even
if DNA has been ordered from the manufacturer. Draft Orders are found at the bottom of the Cart page,
where New, Processing, and in-progress (Draft) orders are tracked. 

### Finalizing an Order
To finalize a draft order after material has been received, find the order on 


## Putting Items in the Cart
---
[TODO]



## Orders Table
---

<span style="color: red;">**TODO...**</span>  
![](../assets/img/scaffold-table.png)
<br>
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



