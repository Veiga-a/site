// Add Bootstrap JS for components like accordion
document.addEventListener("DOMContentLoaded", () => {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
  
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".skill-progress")
  
    const animateSkillBars = () => {
      skillBars.forEach((bar) => {
        const barPosition = bar.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (barPosition < screenPosition) {
          const width = bar.parentElement.getAttribute("data-width") || bar.style.width
          bar.style.width = width
          bar.style.animation = "fillBar 1.5s ease-out forwards"
        }
      })
    }
  
    // Initial check
    animateSkillBars()
  
    // Check on scroll
    window.addEventListener("scroll", animateSkillBars)
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  