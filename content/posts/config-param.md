---
title: "Tutorial: How to setup the basic parameters"
date: 2023-10-16T17:18:00+01:00
subTitle: "subTitle"
description: "In this section, we mainly focus on config.toml file"
draft: false
featured: true
type: posts
author: claudia kurtyka
tags: []
categories: ["Tutorial"]
cover: "https://i.imgur.com/3rS1zPw.png"
---

# Tutorial: How to setup the basic parameters

>> Get to know how we config menu/social media in hugo

### Set up menu 

In the [Tutorial: What's hugo?] blog, I have shown how the menu is added in hugo. 

Head to config.toml file,



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

We add icon in “pre”. The icon library I use is the common fontawesome.
In the menu.html, just using hugo syntax {{.Pre}} to display icon.


{{< highlight html "linenos=table" >}}
 {{ range .Site.Menus.main }}
    <a href="{{ .URL }}" title="{{ .Name }}">
        <li class="hover">
            {{ .Pre }}
            {{ .Name }}
        </li>
    </a>
{{ end }}

{{< / highlight >}}


### Add your social media 

You can add social media in HTML directly, also, can use config file which is easy to change every time you want to update.

{{< highlight toml "linenos=table" >}}
[params]
 [[params.social]]
      url   = "https://twitter.com/"
      icon  = "fa-brands fa-twitter fa-lg"
  [[params.social]]
      url   = "https://facebook.com/"
      icon  = "fa-brands fa-facebook fa-lg" 
  [[params.social]]
      url   = "https://linkedin.com/"
      icon  = "fa-brands fa-linkedin fa-lg"
  [[params.social]]
      url = "https://linkedin.com/"  
      icon = "fa-brands fa-instagram fa-lg" 
{{< / highlight >}}

How to use this config in HTML page? It clearly is a list format, so when the html page render the list, here is the sytanx:



{{< highlight html "linenos=table" >}}
    {{ with $.Site.Params.social }}
        {{ range . }}
        <a href="{{ .url }}" class="flex py-4 text-base" >
            <span class="mr-10 "> <i class="{{ .icon}}"></i></span>
            <div>{{.name}}</div>
        </a>
        {{ end }}
    {{ end }}
{{< / highlight >}}


<blockquote class="imgur-embed-pub" lang="en" data-id="LEo5BfV"><a href="https://imgur.com/LEo5BfV">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>