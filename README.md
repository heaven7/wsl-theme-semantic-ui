# WSL Theme semantic-ui package
built of reuseable ui components

The package is far from complete and not all semantic-ui components are integrated.
The integration is built on blaze templates. This package should help you to switch easily from
one ui framework to another just by encapsuling every ui component into a seperate template.

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Installation](#installation)
- [Templates](#templates)
  - [Accordion](#accordion)
  - [Buttons](#buttons)
  - [Cards](#cards)
  - [Divider](#divider)
  - [Dropdowns](#dropdowns)
  - [Forms](#forms)
    - [Search](#search)
  - [Headings](#headings)
  - [Icons](#icons)
  - [Images](#images)
  - [Menus](#menus)
  - [Modals](#modals)
  - [progressBar](#progressbar)
  - [Contribution & support](#contribution-&-support)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Installation
```bash
meteor add heaven7:wsl-theme-semantic-ui
```

## Templates
Use these templates inside of your own

### Accordion
An accordion can have following options.
```html
{{> accordion collection=accordionItems template="accordionTemplate" class="styled"}}
```
In your template helper set up the collection array
```javascript
accordionItems: function () {
      return [
        {
          title: "title1",
          heading: "hello",
          text: "world"
        },
        {
          title: "title2",
          heading: "item2",
          text: "this is a test"
        }
      ];
    }
```
The collection can also be a meteor collection, but you have to manually define the
title of the accordion items.

Provide a template to render the content of each accordion item
```html
<template name="accordionTemplate">
  <h4>{{heading}}</h4>
  <p>{{text}}</p>
</template>
```

### Buttons
There are templates for buttons, buttons with icons and icon only buttons.
The value for `buttonType` can be `button`, `submit` or `reset`.  
```html
{{> button text=text type=buttonType class=class id=id}}
```
```html
{{> button_with_icon icon=icon text=text type=buttonType class=class id=id}}
```
```html
{{> button_icon_only icon=icon type=buttonType class=class id=id}}
```
### Cards
Cards can have the following options
```html
{{> card
        image=image_url
        meta="My meta data"
        description="My description"
        header="My header"
        title="My title"
        route="collection.show"
        extra_content1="extra_content1"
        extra_content2="extra_content2"
        _id=_id
    }}
```
A card can be filled with extra content templates
```html
<template name="extra_content1">
    Extra content 1
</template>
```
```html
<template name="extra_content2">
    Extra content 2
</template>
```
### Divider
```html
{{> divider_with_icon icon="my icon" text="my text"}}
```
### Dropdowns
> Are not yet implemented fully

#### dropdownMenuWithRoles
Show dropdown items depending on roles. Note, that the `alanning:roles` packages needs to be installed to use this.
`group` is the `_id` of the mongo collection document.
```html
{{> dropdownMenuWithRoles class="right icon button" icon="wrench" items=dropdownItems group=_id}}
```
Before using the dropdown set up the roles *[server]
```javascript
Meteor.methods({
    addUserToRoles: function(userId, roles, group) {
        roles.forEach(function(role) {
            Roles.addUsersToRoles(userId, role, group);
        });
    }
});
```
and define the dropdownItems inside of your template helper
```javascript
dropdownItems: function() {
        return [
            {
                itemclass: "edit-project",
                itemtext: "Edit project",
                roles: 'project-manager'
            },
            {
                divider: true
            },
            {
                itemclass: "delete-project",
                itemtext: "Delete project",
                roles: 'admin'
            }
        ]
    }
```

### Forms
> Not yet fully implemented

Forms are builded mainly in combination with `aldeed:autoform`

#### formContainer
A simple form builder
```html
{{> formContainer headerText="headerText" headerDescription="headerDescription" fields=fields class="myClass" id="myId"}}
```
Define your fields inside of your template helper
```javascript
fields: () => {
    return [
        {
            label: "myLabel",
            type: "text", // can be text|password|checkbox|radio|hidden|button 
            class: "myClass",
            name: "myFieldname",
            readonly: true, // when set, the field is not editable
            placeholder: "myPlaceholder",
            value: "myValue"
        },
        {
            type: "button",
            class: "submit",
            icon: "refresh"
        }
    ]
}
```
#### Form actions
Use predefined form actions in your templates. This works only with the packages `heaven7:wsl-i18n` and `heaven7:wsl-translations`.
```html
insert
{{#autoForm collection="Projects" type="insert" id="addProjectForm"}}
  {{> afQuickField name='title'}}
  {{> afQuickField name='description'
  {{> formInsertActions id="submitAddProject"}}
{{/autoForm}}
update
{{#autoForm collection="Projects" type="update" id="editProjectForm"}}
  {{> afQuickField name='title'}}
  {{> afQuickField name='description' }}
  {{> formUpdateActions id="submitUpdate"}}
{{/autoForm}}
```

#### Search
```html
{{> search class="myClass" url=url icon="search"}}
```
Provide a `url` inside of your template helpler, where data objects are being returned. E.g.
```javascript
Template.myTemplate.helpers({
  url: () => "http://nominatim.openstreetmap.org/search?adressdetails=1&format=json&q={query}"
})
```
And define how data is passed back to search with the `WSL.search.searchResponse` function
```javascript
Template.myTemplate.onRendered(function() {
    // override of WSL.search.searchResponse
    WSL.search.searchResponse = (searchResponse) => {
        var response = {results : []}

        // translate API response to work with search
        $.each(searchResponse, function(index, item) {
            var maxResults = 4

            if(index >= maxResults) return false

            response.results.push({
                title: item.display_name
            })
        })
        return response
    }
}) 
```
### Headings
Headings from h1 to h5 with following options
```html
{{> h2 anchor="buttons" icon="add" text="myText" class="center aligned" iconClass="circular"}}
```
### Icons
```html
{{> icon class="circular medium" icon="add"}}
```
### Images
Are working with [Meteor CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS/).
More information is provided to get the url and store [here](https://github.com/CollectionFS/Meteor-CollectionFS/#url)
```html
{{> image_thumb style="centered" size="medium" url=url store="myStore"}}
{{> image_avatar url=url store="myStore"}}
{{> image_fluid url=url store="myStore"}}
```

### Menus
Create menu elements with dropdowns or a search input field.
```html
{{> menu items=menuItems class='myClass'}}
```
Define an array of menuitems and/or subitems in your template helper.
Place subitems as an array of the value property.
```javascript
Template.myTemplate.helpers({
    menuItems: () => {
        return [
            {
                value: 'test1',
                class: 'test1',
                href: 'http://www.google.de',
                icon: 'add'
            },
            {
                value: 'test2',
                class: 'test2',
                icon: 'remove'
            },
            {
                search: true,
                icon: 'heart'
            },
            {
                icon: 'dropdown',
                class: 'right',
                text: 'more',
                value: [        // subitems
                    {
                        header: 'headertext'
                    },
                    {
                        value: 'test1',
                        class: 'test1',
                        href: 'http://www.google.de',
                        icon: 'add'
                    },
                    {
                        value: 'test2',
                        class: 'test2',
                        icon: 'remove'
                    }
                ]
            }
        ]
    }
})
```
### Modals
```html
{{> showModal template="myTemplate" id="myId" header="myHeader"}}
```
Set your given template
```html
<template name="myTemplate">
  Content of your modal
</template>
or use a autoform in your modal
<template name="myTemplate">
  {{#autoForm collection="Projects" type="insert" id="addProjectForm"}}
        {{> afQuickField name='title'}}
        {{> afQuickField name='description'}}
        {{> formInsertActions id="submitAddProject"}}
  {{/autoForm}}
</template>

```
### progressBar
Currently only display of percent supported
```html
{{> progressBar percent=80 total=100 completeClass="green" showPercent=true}}
```

### Contribution & support
Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request. Thank you.
[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/heaven7/)

