# Nookie 🍪

A simple Firefox extension that clears all cookies and localStorage from the current website with a single click.

## Features

- Clear all cookies and localStorage for the current website instantly by clicking the extension icon
- Automatically reloads the page after clearing data
- No popup interface - just one click and done
- Console feedback showing number of cookies and localStorage items cleared

## Installation

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the extension directory and select `manifest.json`

## Usage

1. Click the Nookie icon (🍪) in your browser toolbar while on any website
2. All cookies and localStorage data for that domain will be instantly cleared
3. The page will automatically reload with fresh state

## Permissions

The extension requires the following permissions:

- `cookies`: To read and remove cookies from websites
- `<all_urls>`: To access cookie information across all websites
- `tabs`: To get the current tab URL and reload the page
- `activeTab`: To execute scripts for clearing localStorage

## Development

The extension consists of three main files:

- `manifest.json`: Extension configuration and permissions
- `background.js`: Core logic for cookie and localStorage deletion
- `icon/`: Directory containing extension icons

## Contributing

Feel free to submit issues and enhancement requests!
