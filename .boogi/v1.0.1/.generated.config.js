module.exports = {
    "metadata": {
        "name": "퓨전 개발자 101",
        "short_name": "fds",
        "description": "This is the website for fusion devs who use Microsoft Power Platform for their work.",
        "language": "ko",
        "url": "https://study.fusiondev.kr",
        "pathPrefix": "/",
        "gaTrackingId": null,
        "siteImage": null,
        "favicon": "/assets/favicon.png",
        "themeColor": "#0066cc"
    },
    "header": {
        "logo": "/assets/logo.png",
        "logoLink": "/",
        "helpUrl": "",
        "links": [],
        "enabled": true
    },
    "sidebar": {
        "enabled": true,
        "ignoreIndex": false,
        "forcedNavOrder": [],
        "expanded": [],
        "groups": [
            {
                "order": 1000,
                "path": "/pp",
                "title": ":rocket: 파워 플랫폼"
            },
            {
                "order": 2000,
                "path": "/m365",
                "title": ":computer: 마이크로소프트 365"
            },
            {
                "order": 3000,
                "path": "/spo",
                "title": ":rainbow: 셰어포인트 온라인"
            },
            {
                "order": 4000,
                "path": "/d365",
                "title": ":fuelpump: 다이나믹스 365"
            },
            {
                "order": 5000,
                "path": "/certs",
                "title": ":scroll: 자격증 준비"
            }
        ],
        "links": [],
        "poweredBy": {}
    },
    "pwa": {
        "manifest": {
            "name": "BooGi",
            "short_name": "BooGi",
            "start_url": "/",
            "background_color": "#6b37bf",
            "theme_color": "#6b37bf",
            "display": "minimal-ui",
            "crossOrigin": "anonymous",
            "icon": "static/assets/logo.png",
            "description": "This is the website for fusion devs who use Microsoft Power Platform for their work.",
            "cache_busting_mode": "none",
            "include_favicon": false,
            "lang": "ko"
        },
        "enabled": true
    },
    "social": {
        "facebook": "https://facebook.com/groups/fusiondevkr",
        "github": "https://github.com/fusiondevkr",
        "gitlab": "",
        "instagram": "",
        "linkedin": "",
        "mail": "",
        "gmail": "",
        "slack": "",
        "twich": "",
        "twitter": "https://twitter.com/fusiondevkr",
        "youtube": "https://youtube.com/fusiondevkr"
    },
    "features": {
        "editOnRepo": {
            "editable": true,
            "location": "https://github.com/fusiondevkr/blog",
            "type": "github"
        },
        "search": {
            "enabled": true,
            "indexName": "docs",
            "algoliaAppId": null,
            "algoliaSearchKey": null,
            "algoliaAdminKey": null,
            "excerptSize": 10000,
            "engine": "localsearch",
            "placeholder": "Search",
            "startComponent": "input",
            "debounceTime": 380,
            "snippetLength": 23,
            "hitsPerPage": 10,
            "showStats": true,
            "localSearchEngine": {},
            "pagination": {
                "enabled": true,
                "totalPages": 10,
                "showNext": true,
                "showPrevious": true
            }
        },
        "toc": {
            "show": true,
            "depth": 3
        },
        "previousNext": {
            "enabled": true,
            "arrowKeyNavigation": true
        },
        "scrollTop": true,
        "showMetadata": true,
        "propagateNetlifyEnv": true,
        "pageProgress": {
            "enabled": false,
            "excludePaths": [
                "/"
            ],
            "height": 3,
            "prependToBody": false,
            "color": "#A05EB5"
        },
        "mermaid": {
            "language": "mermaid",
            "theme": "dark",
            "options": {},
            "width": 300,
            "height": 300
        },
        "rss": {
            "enabled": false,
            "showIcon": true,
            "title": "My RSS feed",
            "copyright": "",
            "webMaster": "M",
            "managingEditor": "",
            "categories": [
                "GatsbyJS",
                "Docs"
            ],
            "ttl": "60",
            "matchRegex": "^/",
            "outputPath": "/rss.xml",
            "generator": "gidocs"
        },
        "darkMode": {
            "enabled": true,
            "default": false
        },
        "publishDraft": false,
        "fullScreenMode": {
            "enabled": false,
            "hideHeader": true,
            "hideToc": true,
            "hideSidebar": true
        }
    },
    "search": {
        "enabled": true,
        "startComponent": "input",
        "placeholder": "Search...",
        "pagination": {
            "enabled": true
        }
    }
};