# Step 1 - Members only protected pages + zero code CRUD
We'll start with creating an empty site, add a page that will be accessible to site members only. Then we'll use data sets and data binding to create/delete new services that we want to monitor. 

1. Create a new empty site 
    * Naviagte to the [blank templates page](https://www.editorx.com/website-templates) and click `Edit` on the "Blank Canvas" template (top left)

2. Add members area
    * Under the `+` sign choose "Members" and click "Add to Site"

    ![members_area](assets/members_area.png "Members area")


3. Add member dashboard page
    * Open the page manager

    ![page-manager](assets/manage_pages.png "Manage Pages")

    * Add new page

    ![add-page](assets/add_new_page.png "Add new page")

    * Pick blank page

    ![blank-page](assets/blank_page.png "blank page")

    * Name it "Member Dashboard"
    * Set the page to be available for members only under page settings

    ![page-settings](assets/page_settings.png "page settings")
    ![members-only](assets/memebrs_only.png)

4. Drag the "site menu" component to the left and 
    * Configure it to show all pages

![manage-menu](assets/manage-menu.png)
![all site pages](assets/all_site_pages.png)

5. Turn on "Dev Mode"

![dev mode on](assets/dmo.png)

6. Create "services" collection
    * First we'll create a new collection and name it "services"

    ![dev mode on](assets/new_collection.png)

    * New collection comes with a "Title" field as the primary field. Add a new field named `Name`, make it primary field and delete the `Title` field.

    ![manage fields](assets/manage_fields.png)

    * Let's change the permissions of the collection so only the site member who created the content can see and edit it.
        * open the collection permissions and privacy settings and follow the picutre:

        ![collection permissions](assets/collection_permissions.png)

7. Adding UI
    * Add a repeater to the stage and change its layout to "list"

    ![new repeater](assets/new_repeater.png)
    ![repeater list](assets/repeater_list.png)

    * Drag a text component inside the repeater item
    * Add a title (text component) "My Services" above the repeater
    * Add a button "New" next to the title
    * By now your page should look like this:
    ![page ui](assets/page_ui.png)

8. Bind the data
    * To bind the repeater item's text to our service name we will need to add to the page a "Data Set" component. Let's drag one to the stage

    ![add dataset](assets/add_dataset.png)

    * Set it to the "Services" collection and configure it to allow both read & write

    ![dataset settings](assets/dataset_settings.png)

    * Now we can select the repeater and bind the text to the "Name" field in the dataset. Important to note that in the editor we won't see the actual data from the database.

    ![data bind](assets/data_bind.png)

9. Add new service

   * We'll add new services using a lightbox. First let's drag a new lightbox to the stage

   ![light box](assets/lightbox.png)

   * Drag a dataset into the light box. This dataset will be used to add new services. Set the dataset to "Write only"
   * Delete the UI that comes with the preset and add a `Text Input` and a `Button`. Your light box should look similar to this one:
   ![new service modal](assets/new_service_modal.png)
   * Connect the Text Input to the "Name" field and the "Add" button as a submit.
  
10. Test your work
    * If all the steps went as planed, People can now register to your site using their google/facebook/email accounts and see the list of their services. They can also create new services.
    * Bonus - For each row in the repeater add an icon of a trash bin and connect it to delete the current serivce.


Congratulations! You're done with Step 1 (the longest). Move on to [Step 2 - Learning about repeaters](step2.md)






