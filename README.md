# Corne Cob 🌽
*A modern Ergogen clone of the popular Corne layout, with a few thoughtful modifications.*

<p align="center">
  <img width="1025" height="484" alt="Corne Cob Render" src="https://github.com/user-attachments/assets/e373d5a8-4498-42e9-a572-d5ac58e20a0b" />
</p>

---

## Project Status
**Version:** v0  

> This version is still in development and not yet ready for production.

---

## Overview
**Corne Cob** builds on the [Corne](https://github.com/foostan/crkbd) layout and extends [Narkoleptika’s josukey](https://github.com/Narkoleptika/josukey) using [Ergogen](https://ergogen.xyz/).  
It’s designed with improved ergonomics, better hardware support, and a few quality-of-life enhancements.

---

## Key Features and Additions
Compared to **josukey**, Corne Cob includes:

- OLED display for real-time system feedback  
- Larger battery for extended wireless use
- Angled case for improved typing comfort  
- Nice!Nano-specific footprint for wireless builds  
- Separate left and right PCBs for easier assembly  
- 1.5u thumb key support for flexible keymapping  
- 6-column design (versus the standard 5-column Corne)
- Horizontal reset key for easier access
- North facing RGB for better choc keycap support

---

## Built With
- [Ergogen](https://ergogen.xyz/) — PCB and case generation  
- [KiCad](https://kicad.org/) — schematic and layout editing  
- [josukey](https://github.com/Narkoleptika/josukey) — base layout inspiration  

---

## Roadmap
- [ ] Finalize v1 PCB layout  
- [ ] Test case fit and alignment  
- [ ] Validate power delivery and charging circuit  
- [ ] Release build guide and firmware configuration

---
## Parts List
Price estimate chart found [here](https://docs.google.com/spreadsheets/d/1HdLqQ5FFB6K92mRF0pi76wc0cOreWh93cLWDCBQdG54/edit?usp=sharing)

- Nice!Nano v2 2 [Microcontroller](https://typeractive.xyz/products/nice-nano)
- SSD1306 I2C IIC OLED 2 
- 1800 mah battery 2 (considering [PS3 Controller batteries](https://www.amazon.com/Replacement-Playstation-Controller-CECHZC2E-CECHZC2U-3/dp/B09726K2LC))
- Power Switch >2 [PCM12SMTR](https://www.digikey.com/en/products/detail/c-k/PCM12SMTR/1640112)
- Reset Switch >2 [EVQ-PUC02K](https://www.digikey.com/en/products/detail/panasonic-electronic-components/EVQ-PUC02K/286336)
- RGB LED >42 [S35353RGBSK6812MINID001](https://www.digikey.com/en/products/detail/home-run-tech/S35353RGBSK6812MINID001/25879535)
- Diode >42 [1N4148W](https://www.digikey.com/en/products/detail/smc-diode-solutions/1N4148W/6022450)
- Battery Adapter [S2B-PH-K-S](https://www.digikey.com/en/products/detail/jst-sales-america-inc/S2B-PH-K-S/926626)
- Choc v1 switches >42 [Pro Red](https://typeractive.xyz/products/choc-switches?variant=46024772387047)
- Choc v1 keycaps >42 
- Rubber Feet >8 [SJ5382](https://www.digikey.com/en/products/detail/3m/SJ5382/3866079)
- M2 screws >10
---

## Acknowledgements
Special thanks to **Narkoleptika** for the original [josukey](https://github.com/Narkoleptika/josukey) project, and to the **Ergogen** and **Corne** communities for their open-source contributions.
