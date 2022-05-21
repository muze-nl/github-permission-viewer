# GitHub Permission Viewer


[![Muze][muze-shield]][muze-site]
[![License][license-shield]][license-link]
[![standard-readme compliant][standard-readme-shield]][standard-readme-link]

_See who has access to what and why for a GitHub organisation_

## Install

As this is a hosted web-app, no install is needed. Just visit https://github-permissions.dev.muze.nl/

## Usage

Easy as one-two-three:

1. Visit https://github-permissions.dev.muze.nl/
2. Provide an Organisation name and [personal access token (PAT)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
3. See who has access to what and why

## Development

This project is developed in Simply-Code, an experimental low-code environment created by [Muze](https://muze.nl).

All code changes should be made in Simply-Code: https://github-permissions.dev.muze.nl/simply-code/

At this point, both the development environment and the application itself are committed to this repo.

At a later time, the develop environemnt might be removed, with only the actual application code living here.

The project structure looks like this:

```
.
├── lib
└── www
    ├── api
    │   └── data
    ├── css
    ├── data
    ├── files
    │   └── simply-build
    ├── img
    ├── js
    ├── simply-code
    └── simply-edit
```

The majority of these folders are part of Simply-Code.

The application specific files ad folders are stored in `www/api/data`:

```
.
└── www
    └── api
        └── data
            ├── base-components
            │   ├── base-styles
            │   └── raw-api
            ├── components
            │   ├── org-members
            │   ├── org-repos
            │   └── org-teams
            └── pages
                ├── home
                └── team
```

## Contributing

At this point merge-requests are not expected or accepted, but feel free to [open an issue](https://github.com/muze-nl/github-permission-viewer/issues) to provide usage feedback.

## License

Created by Muze B.V. under an [MIT license][license-link].

[license-link]: ./LICENSE
[license-shield]: https://img.shields.io/github/license/muze-nl/github-permission-viewer.svg
[muze-shield]: https://img.shields.io/badge/%7BU%7D-Muze-BF1E2E.svg?labelColor=BF1E2E
[muze-site]: https://www.muze.nl/
[project-stage-badge: Experimental]: https://img.shields.io/badge/Project%20Stage-Experimental-yellow.svg
[project-stage-page]: https://blog.pother.ca/project-stages/
[standard-readme-link]: https://github.com/RichardLitt/standard-readme
[standard-readme-shield]: https://img.shields.io/badge/-Standard%20Readme-brightgreen.svg
