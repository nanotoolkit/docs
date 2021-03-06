# Orders [TODO]

[Purpose](#purpose)  
[Draft Orders vs. Finalized Orders](#draft-orders-vs-finalized-orders)   
[Cart](#cart)  
[Draft Orders Table](#draft-orders-table)  
[Orders Table](#orders-table)  
[Order Detail](#order-detail)  
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
for the Draft Order. 

Finally, when the material has been received by the lab, the order is considered fulfilled. 
The user can enter a vendor number for the order, effectively marking it as "**Finalized**." 
This will move the order from the Draft Orders table to the **Orders** page, 
where all past fulfilled orders are tracked. 

<br>

#### Finalizing an Order
To finalize a draft order after material has been received:
1. Find the order on the Cart page and select the **order id**.
![](../assets/img/orders-table-id.png)   



2. The **Order Detail** page will come up. Click the "Finalize" button in the top right corner.
![](../assets/img/order-finalize-button-no-header.png)


3. A dialog will pop up. Enter the Vendor Number associated with the order. 
This can be alphanumeric. The intent is to have a way to track the physical order in the lab. After entering
a vendor number and clicking **Enter**, a confirmation will pop up and the order will be moved to the 
**Orders** page. 
<img src="../assets/img/order-finalize-dialog.png" alt="drawing" width="400"/>   
<img src="../assets/img/order-finalize-confirmation.png" alt="drawing" width="400"/>

<br>


## Cart
---
Items are placed in the Cart from the **Projects** page. After selecting a project,
all the designs for that project will be shown on the right side of the page. 

Only eligible designs will have an "**Add to Cart**" icon available at the far right of the design row.
Clicking this icon will add the design to the cart. Clicking it a second time will remove the item 
from the cart.

When a design has been added to the cart, it will be available to order on the **Cart** page. 
Orders are grouped by an underlying scaffold. In this way, designs that are otherwise unrelated by project or parent 
design will be grouped by scaffold. 
![](../assets/img/cart-table-2-no-header.png)


The Cart table has the following columns:

* **ID** - Order id number. Clicking this will navigate to teh order detail page.
* **Icon** - Design Icon.
* **Project** - Project(s) that are part of the order. There may be multiple projects in a single order.
  Clicking the project name will navigate to the respective project page.
* **Design** - Design(s) that are part of the order. There may be multiple designs in a single order.
  Clicking the design name will navigate to the respective design page.
* **Owner** - the team member that created the design.
* **Scaffold** - The underlying scaffold used for the design. Clicking this will navigate to the respective scaffold
on the Scaffold page.
* **Staples** - The number of staples for the order.
* **Past Orders** - Prior order(s), if any, that have included this design. Clicking the order id will navigate to the
respective Order Detail page.
* **Order** - Button to initiate order for the given scaffold. Orders are grouped by the underlying scaffold. 
* **Remove** - Click to remove the design from the cart.

<br> 

## Draft Orders Table
---

![](../assets/img/cart-draft-orders-completed-table-no-header.png)    


Draft Orders are listed in a table on the Cart page with the following columns:

* **ID** - Order id number. Clicking this will navigate to teh order detail page.
* **Finalize** - Button to navigate to order detail and enter the vendor number to finalize the order.
* **Date Ordered** - The date the order was created.
* **Icon** - Design Icon.
* **Project** - Project(s) that are part of the order. There may be multiple projects in a single order. 
Clicking the project name will navigate to the respective project page.
* **Design** - Design(s) that are part of the order. There may be multiple designs in a single order.
Clicking the design name will navigate to the respective design page.
* **96-Well Plate(s)** - Displays the first 96-well plate image generated for the order.
* **384-Well Plate(s)** - Displays the first 384-well plate image generated for the order.
* **Staples** - The number of staples for the order.
* **Nucleotides** - The number of nucleotides for the order.

<br>

## Orders Table
---

![](../assets/img/orders-table.png)

Finalized Orders are listed in a table on the Orders page with the following columns:

* **ID** - Order id number. Clicking this will navigate to teh order detail page.
* **Date Ordered** - The date the order was created.
* **Vendor No** - An alphanumeric vendor number associated with the order. This number is entered on the 
Order Detail page when finalizing the order.
* **Path** - Design Icon.
* **Project** - Project(s) that are part of the order. There may be multiple projects in a single order.
  Clicking the project name will navigate to the respective project page.
* **Design** - Design(s) that are part of the order. There may be multiple designs in a single order.
  Clicking the design name will navigate to the respective design page.
* **96-Well Plate(s)** - Displays the first 96-well plate image generated for the order.
* **384-Well Plate(s)** - Displays the first 384-well plate image generated for the order.
* **Staples** - The number of staples for the order.
* **Nucleotides** - The number of nucleotides for the order.

<br>


## Order Detail
---
Clicking on the Order Id of either a Draft Order or Finalized Order will navigate to the respective Order Detail page.
![](../assets/img/orders-table-id.png)

The Order Detail page contains several panels related to different parts of the order:
* [Info](#info)
* [Regenerate Order](#regenerate-order)
* [Designs](#designs)
* [Stocks (96-well)](#stocks-96-well)
* [Destination Plates (384-well)](#destination-plates-384-well)
* [Stocks grouped by Design](#stocks-grouped-by-design)

### Info
The Info panel contains general key information about the order. These include the following:

* **Project(s)** - Project(s) that are part of the order. There may be multiple projects in a single order.
  Clicking the project name will navigate to the respective **Project** page.
* **Owner(s)** - the team member or members that created designs in the order.
  Clicking the owner name will navigate to the respective owner on the **Team** page.
* **Scaffold(s)** - The underlying scaffold or scaffolds used for the order's designs.
Clicking the scaffold name will navigate to the respective scaffold on the **Scaffold** page.
* **Staples** - The number of staples for the order.
* **Display** - A toggle switch to display 96-well image data or 384-well image data.
* **Plate Totals** - The total number of plates for both the 96-well and 384-well configurations.
* **Files** - Button to download the files generated for the order.
<br>

<img src="../assets/img/order-info-panel.png" alt="drawing" width="300">   

### Regenerate Order
---
The Regenerate Order panel allows the user to make adjustments to the initial order settings and regenerate
the order files based on those adjustments:

* **Replace "?" with "T" in staple sequence?** - ...
* **Do not skip wells between different color stocks** - If true, the individual stocks will be arranged 
to maximize well usage by abutting them to one another on the plate. Otherwise, the default behavior is
to separate the stocks, each one to its own row.
* **Source plate staple conc. (uM)?** - ...
* **Final Volume of 96-well stocks?** - ...
* **Number of stock replicates in destination plate?** - ...
  <br>

<img src="../assets/img/order-regenerate-order.png" alt="drawing" width="500">   

The **Regenerate** button can only be clicked if a change to the order settings is made. Clicking the button will 
make Nanotoolkit regenerate all the order files, which can take several seconds. Afterward, the user may refresh the page and 
see the new resultant outputs.


### Designs
---
The Designs table displays pertinent information about the designs comprising an order.
Depending on the **Display** setting in the **Info** panel (96 or 384), the table will show 
either 96- or 384-well image plates in the **Plates** column. 

The table displays information for the following columns:

* **ID** - Order id number. Clicking this will navigate to teh order detail page.
* **Design** - Design(s) that are part of the order. There may be multiple designs in a single order.
  Clicking the design name will navigate to the respective design page.
* **Staples** - The number of staples for the order.
* **Slice** - Design icon.
* **Path** - 2D diagram of the design.
* **Plate(s)** - Displays the first plate image for either the 96- or 384-well plate generated for the order, 
based on the **Display** setting in the **Info** panel.
  <br>

![](../assets/img/order-plates-96.png)   
<br>
![](../assets/img/order-plates-384.png)   


### Stocks (96-well)

...
![](../assets/img/order-stocks-96-no-header.png)   

### Destination Plates (384-well)

...
![](../assets/img/order-plates-dest-no-header.png)   

### Stocks grouped by Design

...
![](../assets/img/order-stocks-design-1.png)   
<br>
![](../assets/img/order-stocks-design-2.png)   




## FAQ / Troubleshooting
---
<br>



