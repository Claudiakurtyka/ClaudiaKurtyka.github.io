---
title: "Tutorial: What's hugo?"
date: 2023-10-16T17:17:26+01:00
subTitle: "subTitle"
description: "This section includes three parts: 1) the structure of the project 2) Basic Cli 3) How to update my project/profile"
draft: false
type: posts
author: claudia kurtyka
tags: [""]
categories: ["Tutorial"]
cover: "https://i.imgur.com/ImkLpCT.png"
---

## This is the instruction of the template

### Hugo Introduction
#### Basic Description

Hugo is a popular open-source static site generator that allows you to create fast and efficient websites without relying on a database or server-side scripting. The structure of a Hugo site includes the following elements:

1. Content folder: This folder contains all the content of your website, including pages, blog posts, images, and other media. The content is typically written in Markdown, which is a lightweight markup language.
2. Static folder: This folder contains all the static assets of your website, including CSS stylesheets, JavaScript files, images, and other media files. These assets are not generated dynamically and are instead served as-is.
Archetypes folder: This folder contains templates for creating new content files. You can create templates for different types of content, such as blog posts or pages, to make it easy to create new content quickly.
3. Themes folder: This folder contains all the templates, stylesheets, and other assets for your website’s theme. You can choose from a variety of pre-built themes or create your own.
4. Config file: This file contains configuration settings for your Hugo site, such as the site title, language, and other global settings.
5. Layouts folder: This folder contains templates for generating the HTML output of your website. You can create templates for different types of pages, such as the homepage, blog index, or individual blog posts.
Data folder: This folder contains data files that are used to generate your website, such as site configuration settings, lists of authors or categories, or other metadata.


### How hugo run the application?

We mainly focus on layouts folder. In _default folder, baseof.html is the entry port, index.html is the home

#### Config.toml file

In config.toml, we can setup theme and define all the global variables, such as website url, website name, your name as the author, social media and so on.

1. Introduce theme


{{< highlight toml "linenos=table" >}}
theme = 'claudia'  # the name should match your theme's name in the theme folder

{{< / highlight >}}

2. Setup menu





{{< highlight toml "linenos=table" >}}


# setup menu
sectionPagesMenu = "main"
[menu]
  [[menu.main]]
    name = "Work"
    url = "/#project"
    weight = 1
  [[menu.main]]
    name = "Abouts"
    identifier = "about"
    url = "/#about"
    weight = 2
  [[menu.main]]
    name = "Contact"
    identifier = "contact"
    url = "/#contact"
    weight = 3

{{< / highlight >}}

If you want you menu contains icon, you can add another param, eg.


{{< highlight toml "linenos=table" >}}


# setup menu
sectionPagesMenu = "main"
[menu]
  [[menu.main]]
    name = "Work"
    url = "/#project"
    weight = 1
    icon = "fa fa-works"
   ....
{{< / highlight >}}

3. Common js and css


<blockquote class="imgur-embed-pub" lang="en" data-id="TVbj0Cb"><a href="https://imgur.com/TVbj0Cb">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>


Every html page contains some same css files and js files, such as same header and footer. In Layout/partials folder, hugo helps us to generate head.html, footer.html already, but we can create another two html to wrap commom js and css(header footer).


<blockquote class="imgur-embed-pub" lang="en" data-id="8cPVqwA"><a href="https://imgur.com/8cPVqwA">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

Head and footer we can use for defining common navigation(nav bar) and footer parts.


### Default HTML

#### Entry Point — baseof.html

In layouts/_default folder, baseof.html is the main entrance, so we import the common HTML in the baseof.html, such as header, footer and main body.


This part is the dynamic content we reuse in each html, in other words, when user click different HTML page, it’ll show different content, but the header(navigation menu) and footer are the same.




{{< highlight toml "linenos=table" >}}

  {{- block "main" .}}xxxxxx{{- end}}

{{< / highlight >}}


####  homepage — index.html

The home page contains index.html , _index.md(optional).
If we want to use the parameters we define in the md file, the syntax is




{{< highlight toml "linenos=table" >}}
  {{.Params.typed_names }}
{{< / highlight >}}


If we want to use the parameters we define in the config file(Global parameters), the syntax is

{{< highlight toml "linenos=table" >}}
 {{ $.Site.Params.homepage }}
{{< / highlight >}}


#### Article/post page — single.html

In Hugo, the single.html file is a template file used to display individual content pages, such as a single blog post or a single page on your website.

The single.html template can include Hugo variables and functions to display dynamic content, such as the title, date, author, and content of the page. You can also add custom CSS styles or JavaScript scripts to enhance the layout and functionality of your pages.

Once you have created the single.html template in your theme’s layouts directory, Hugo will automatically use it to display individual content pages on your website. If you want to customize the layout for specific types of content, you can create additional templates with different names, such as single-blog.html or single-page.html, and specify their usage in your Hugo configuration file.