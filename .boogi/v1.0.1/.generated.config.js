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
                "order": 1,
                "path": "/pp",
                "title": ":rocket: 파워 플랫폼"
            },
            {
                "order": 2,
                "path": "/pas",
                "title": ":rocket: 파워 앱"
            },
            {
                "order": 3,
                "path": "/pau",
                "title": ":rocket: 파워 오토메이트"
            },
            {
                "order": 4,
                "path": "/pva",
                "title": ":rocket: 파워 버추얼 에이전트"
            },
            {
                "order": 5,
                "path": "/pbi",
                "title": ":rocket: 파워 BI"
            },
            {
                "order": 6,
                "path": "/m365",
                "title": ":computer: 마이크로소프트 365"
            },
            {
                "order": 7,
                "path": "/spo",
                "title": ":rainbow: 셰어포인트 온라인"
            },
            {
                "order": 8,
                "path": "/d365",
                "title": ":fuelpump: 다이나믹스 365"
            },
            {
                "order": 9,
                "path": "/certs",
                "title": ":scroll: 자격증 준비"
            },
            {
                "order": 10,
                "path": "/workshops",
                "title": ":hammer_and_wrench: 워크샵 및 부트캠프"
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
        "youtube": "https://youtube.com/channel/UCak8-7QciP6IUgIBBGRw3Vw"
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
            "depth": 5
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