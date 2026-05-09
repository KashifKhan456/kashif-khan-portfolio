from playwright.sync_api import sync_playwright

def verify_portfolio():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        # Go to the local dev server
        page.goto("http://localhost:3000")

        # Wait for content to load (the hero section text)
        page.wait_for_selector("text=Engineering scalable SaaS systems.")

        # Take a full page screenshot
        page.screenshot(path="screenshots/final_professional_verification_updated.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_portfolio()
