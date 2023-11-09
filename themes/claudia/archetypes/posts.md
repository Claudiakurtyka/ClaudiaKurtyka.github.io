---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
subTitle: "subTitle"
description: "this is description"
draft: false
type: posts
author: {{ .Site.Params.author}}
tags: ["tag1", "tag2"]
categories: ["cate1","cate2"]
cover: ""
---

