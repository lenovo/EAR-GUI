# EAR-GUI

EAR-GUI provide a web based user interface to
create or modify EAR configuration file.

## Installation

EAR-GUI release as a Docker image, it can work independently. There are two ways to get
the image:
1. Access the Antilles project from the Github, and build the Docker image by yourself.
(Antilles is the LiCO open source version)
2. Access the EAR GUI Docker Hu b Tag directly.

Execute the follow command to launch EAR GUI service:
1. `docker build -t ear-gui:v1 .`
2. `docker run -itd -p 8080:443 ear-gui:v1`

Open your web browser and access URL:(https://ip_addr:8080)

## Usage

EAR-GUI User Guide reference to [doc/EAR_GUI_User_Guide.pdf](./doc/EAR_GUI_User_Guide.pdf)

## Contributors

- Sign out Individual/Non-Commercial Contributor License Agreement (CLA) if you will be contributing on behalf of yourself in individual capacity or on behalf of a non-commercial entity, e.g. a University or a non-profit organization.
- If you are contributing on behalf of your employer, other than a non-commercial entity, we’ll  need a signed copy of our Corporate Contributor License Agreement (CCLA).
- Fork the repo, make your changes, and open pull requests!

## License

BSD-3 license for individual/non-commercial use and EPL-1.0 license for commercial use.

