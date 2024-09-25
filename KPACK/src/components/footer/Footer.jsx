import React from 'react'

function Footer() {
  return (
    <footer className="bg-transarent text-black flex flex-col items-center justify-center h-full p-4 ">
    <div className="flex space-x-4 mb-2">
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
    </div>
    <div className="flex space-x-4 mb-2">
        <a href="https://facebook.com" className="hover:underline">Facebook</a>
        <a href="https://twitter.com" className="hover:underline">Twitter</a>
        <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        <a href="https://instagram.com" className="hover:underline">Instagram</a>
    </div>
    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    <p className="text-sm">Email: contact@yourcompany.com | Phone: (123) 456-7890</p>
    <p className="text-sm">123 Your Street, Your City, Your State</p>
</footer>
  )
}

export default Footer