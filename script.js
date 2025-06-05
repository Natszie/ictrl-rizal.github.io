// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // Smooth scrolling for navigation links
  const navLinksElements = document.querySelectorAll(".nav-link")
  navLinksElements.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
      }
    })
  })

  // Add scroll effect to header
  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards for animation
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })

  // Add click handlers for buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Add ripple effect
      const ripple = document.createElement("span")
      ripple.classList.add("ripple")
      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
})

// Add CSS for mobile menu
const style = document.createElement("style")
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--white);
            flex-direction: column;
            padding: var(--spacing-md);
            box-shadow: var(--shadow-md);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-link {
            padding: var(--spacing-sm) 0;
            border-bottom: 1px solid var(--medium-beige);
        }
        
        .nav-link:last-child {
            border-bottom: none;
        }
    }
    
    .header {
        transition: transform 0.3s ease;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Learning Section Functions
const contentData = {
  "manila-education": {
    title: "Education in Manila (1872-1882)",
    content: `
      <h3>Ateneo Municipal de Manila (1872-1877)</h3>
      <p>José Rizal entered Ateneo Municipal at the age of 11. Despite initial challenges, he excelled academically and graduated with a Bachelor of Arts degree with highest honors (sobresaliente).</p>
      
      <h4>Key Achievements at Ateneo:</h4>
      <ul>
        <li>Consistently earned top grades in all subjects</li>
        <li>Developed his artistic talents in painting and sculpture</li>
        <li>Wrote his first poem "Sa Aking mga Kabata"</li>
        <li>Learned multiple languages including Latin, Spanish, and French</li>
        <li>Participated in literary and scientific discussions</li>
      </ul>
      
      <h3>University of Santo Tomas (1877-1882)</h3>
      <p>Rizal enrolled at UST to study Philosophy and Letters, later switching to Medicine. However, he experienced discrimination and felt the limitations of the Spanish colonial education system.</p>
      
      <h4>Challenges at UST:</h4>
      <ul>
        <li>Racial discrimination from Spanish professors</li>
        <li>Limited academic freedom and outdated curriculum</li>
        <li>Restriction on Filipino students' participation</li>
        <li>Growing awareness of social inequalities</li>
      </ul>
    `,
  },
  "first-loves": {
    title: "First Loves and Family Pain",
    content: `
      <h3>Segunda Katigbak - First Love</h3>
      <p>At age 16, Rizal fell in love with Segunda Katigbak, a beautiful young woman from Lipa, Batangas. However, she was already engaged to another man, causing Rizal his first heartbreak.</p>
      
      <h3>Leonor Valenzuela - Secret Letters</h3>
      <p>Rizal wrote secret love letters to Leonor Valenzuela, using invisible ink made from water and salt. Their correspondence had to remain hidden due to social conventions.</p>
      
      <h3>Leonor Rivera - The Great Love</h3>
      <p>Leonor Rivera became Rizal's greatest love during his university years. She was his cousin and inspiration for the character of María Clara in Noli Me Tangere.</p>
      
      <h4>Their Relationship:</h4>
      <ul>
        <li>Met when Leonor was only 13 years old</li>
        <li>Maintained correspondence during Rizal's time abroad</li>
        <li>Used the pet name "Taimis" for their secret letters</li>
        <li>Eventually married another man due to family pressure</li>
      </ul>
      
      <h3>Family Tragedy - Mother's Imprisonment</h3>
      <p>Teodora Alonso, Rizal's mother, was unjustly accused and imprisoned. This event deeply affected Rizal and strengthened his resolve to fight against colonial injustices.</p>
    `,
  },
  "spain-departure": {
    title: "Secret Departure to Spain (1882)",
    content: `
      <h3>The Decision to Leave</h3>
      <p>In 1882, Rizal made the difficult decision to leave the Philippines secretly to continue his studies in Europe. He was motivated by several factors:</p>
      
      <h4>Reasons for Departure:</h4>
      <ul>
        <li>Limited educational opportunities in the Philippines</li>
        <li>Desire to study medicine to help his countrymen</li>
        <li>Growing awareness of the need for reforms</li>
        <li>Fear of Spanish authorities due to his liberal ideas</li>
      </ul>
      
      <h3>The Secret Journey</h3>
      <p>Rizal left Manila on May 3, 1882, aboard the steamship Salvadora bound for Singapore. Only his older brother Paciano knew of his plans.</p>
      
      <h4>Journey Details:</h4>
      <ul>
        <li>Used the name "José Mercado" to avoid detection</li>
        <li>Traveled via Singapore, Ceylon, and the Suez Canal</li>
        <li>Arrived in Marseilles, France on June 12, 1882</li>
        <li>Proceeded to Barcelona, then to Madrid</li>
      </ul>
      
      <h3>First Impressions of Europe</h3>
      <p>Rizal was amazed by the advanced civilization, freedom of thought, and technological progress he witnessed in Europe, which contrasted sharply with the colonial Philippines.</p>
    `,
  },
  "madrid-studies": {
    title: "Studies and Advocacy in Madrid",
    content: `
      <h3>Universidad Central de Madrid</h3>
      <p>Rizal enrolled at Universidad Central de Madrid to study Medicine and Philosophy. He was an exemplary student and graduated with honors.</p>
      
      <h4>Academic Achievements:</h4>
      <ul>
        <li>Earned Licentiate in Medicine (1884)</li>
        <li>Completed Philosophy and Letters degree</li>
        <li>Studied under renowned European professors</li>
        <li>Conducted research on various subjects</li>
      </ul>
      
      <h3>The Propaganda Movement</h3>
      <p>Rizal joined the Propaganda Movement, a group of Filipino reformists advocating for peaceful reforms in the Philippines.</p>
      
      <h4>Contributions to the Movement:</h4>
      <ul>
        <li>Wrote articles for "La Solidaridad" newspaper</li>
        <li>Advocated for Filipino representation in Spanish Cortes</li>
        <li>Promoted education and civil rights for Filipinos</li>
        <li>Collaborated with other reformists like Marcelo H. del Pilar</li>
      </ul>
      
      <h3>Social Life and Relationships</h3>
      <p>In Madrid, Rizal met Consuelo Ortiga y Pérez, daughter of Don Pablo Ortiga. Though he admired her, he chose not to pursue the relationship seriously, focusing instead on his studies and advocacy work.</p>
      
      <h3>Literary Works</h3>
      <p>During this period, Rizal began writing what would become his masterpiece, "Noli Me Tangere," drawing from his experiences and observations of colonial injustices.</p>
    `,
  },
  "noli-me-tangere": {
    title: "Medical Training and Noli Me Tangere",
    content: `
      <h3>Ophthalmology Studies</h3>
      <p>Rizal specialized in ophthalmology, motivated by his mother's deteriorating eyesight. He studied under renowned European eye specialists.</p>
      
      <h4>Training Locations:</h4>
      <ul>
        <li><strong>Paris, France:</strong> Studied under Dr. Louis de Wecker</li>
        <li><strong>Heidelberg, Germany:</strong> Worked with Dr. Otto Becker</li>
        <li><strong>Leipzig, Germany:</strong> Further specialized training</li>
      </ul>
      
      <h3>Writing Noli Me Tangere</h3>
      <p>While studying medicine, Rizal worked on his first novel, "Noli Me Tangere" (Touch Me Not), which exposed the abuses of Spanish colonial rule.</p>
      
      <h4>About the Novel:</h4>
      <ul>
        <li><strong>Started:</strong> 1884 in Madrid</li>
        <li><strong>Completed:</strong> 1886 in Berlin</li>
        <li><strong>Published:</strong> March 1887 in Berlin</li>
        <li><strong>Funding:</strong> Supported by friends, particularly Maximo Viola</li>
      </ul>
      
      <h3>Key Characters and Their Real-Life Inspirations</h3>
      <ul>
        <li><strong>Crisóstomo Ibarra:</strong> Represents Rizal himself</li>
        <li><strong>María Clara:</strong> Inspired by Leonor Rivera</li>
        <li><strong>Padre Dámaso:</strong> Represents abusive Spanish friars</li>
        <li><strong>Elías:</strong> Symbolizes the oppressed Filipino masses</li>
      </ul>
      
      <h3>Impact and Reception</h3>
      <p>The novel created a sensation both in the Philippines and Spain. It was praised by liberals but condemned by conservative Spanish authorities and clergy.</p>
      
      <h4>Reactions:</h4>
      <ul>
        <li>Banned in the Philippines by Spanish authorities</li>
        <li>Praised by European intellectuals</li>
        <li>Inspired Filipino nationalism and reform movements</li>
        <li>Led to death threats against Rizal</li>
      </ul>
    `,
  },
  "el-filibusterismo": {
    title: "El Filibusterismo (1891)",
    content: `
      <h3>The Sequel Novel</h3>
      <p>"El Filibusterismo" (The Reign of Greed) was Rizal's second and final novel, published in Ghent, Belgium in 1891. It was darker and more revolutionary than its predecessor.</p>
      
      <h4>Key Differences from Noli Me Tangere:</h4>
      <ul>
        <li>More pessimistic and revolutionary in tone</li>
        <li>Advocated for violent revolution as a last resort</li>
        <li>Showed the failure of peaceful reforms</li>
        <li>Depicted the worsening conditions in the Philippines</li>
      </ul>
      
      <h3>Main Characters</h3>
      <ul>
        <li><strong>Simoun:</strong> Crisóstomo Ibarra's alter ego, now a revolutionary</li>
        <li><strong>Basilio:</strong> Sisa's son, now a medical student</li>
        <li><strong>Isagani:</strong> Idealistic student leader</li>
        <li><strong>Padre Florentino:</strong> The wise priest who represents hope</li>
      </ul>
      
      <h3>Major Themes</h3>
      <ul>
        <li>The failure of the reform movement</li>
        <li>The corruption of Spanish colonial government</li>
        <li>The suffering of the Filipino people</li>
        <li>The moral consequences of revolution</li>
      </ul>
      
      <h3>Publication Challenges</h3>
      <p>Rizal faced financial difficulties in publishing the novel. He was helped by Valentin Ventura, who provided the necessary funds.</p>
      
      <h3>Spanish Reaction</h3>
      <p>The Spanish authorities became even more hostile toward Rizal after the publication of El Filibusterismo. They viewed it as seditious and inflammatory.</p>
      
      <h4>Consequences:</h4>
      <ul>
        <li>Increased surveillance of Rizal's activities</li>
        <li>Banning of the novel in the Philippines</li>
        <li>Growing suspicion of Rizal's loyalty to Spain</li>
        <li>Preparation for his eventual arrest</li>
      </ul>
    `,
  },
  "dapitan-exile": {
    title: "Return and Exile in Dapitan (1892-1896)",
    content: `
      <h3>Return to the Philippines</h3>
      <p>Rizal returned to Manila on June 26, 1892, after 10 years abroad. He immediately founded La Liga Filipina, a peaceful organization aimed at uniting Filipinos.</p>
      
      <h4>La Liga Filipina Goals:</h4>
      <ul>
        <li>Unite the Filipino people</li>
        <li>Promote education and agriculture</li>
        <li>Encourage commerce and industry</li>
        <li>Study and apply reforms</li>
      </ul>
      
      <h3>Arrest and Exile</h3>
      <p>Just four days after founding La Liga Filipina, Rizal was arrested and exiled to Dapitan, Zamboanga del Norte, on July 17, 1892.</p>
      
      <h3>Life in Dapitan (1892-1896)</h3>
      <p>Despite being in exile, Rizal made the most of his time in Dapitan, contributing significantly to the community's development.</p>
      
      <h4>Achievements in Dapitan:</h4>
      <ul>
        <li><strong>Medical Practice:</strong> Treated patients and performed surgeries</li>
        <li><strong>Education:</strong> Established a school for local children</li>
        <li><strong>Agriculture:</strong> Introduced new farming techniques</li>
        <li><strong>Engineering:</strong> Designed a water system for the town</li>
        <li><strong>Arts:</strong> Created sculptures and paintings</li>
        <li><strong>Science:</strong> Collected specimens and conducted research</li>
      </ul>
      
      <h3>Josephine Bracken</h3>
      <p>In 1895, Rizal met Josephine Bracken, an Irish woman who came to Dapitan with her adoptive father for eye treatment. They fell in love and lived together as common-law spouses.</p>
      
      <h4>Their Relationship:</h4>
      <ul>
        <li>Josephine became Rizal's companion and inspiration</li>
        <li>They had a son who died shortly after birth</li>
        <li>The Catholic Church refused to marry them</li>
        <li>She remained loyal to Rizal until his death</li>
      </ul>
      
      <h3>Continued Correspondence</h3>
      <p>Throughout his exile, Rizal maintained correspondence with family and friends, continuing to advocate for peaceful reforms while staying informed about developments in the Philippines and abroad.</p>
    `,
  },
  "final-sacrifice": {
    title: "Final Arrest and Execution (1896)",
    content: `
      <h3>The Philippine Revolution Begins</h3>
      <p>In August 1896, the Katipunan, a secret revolutionary society founded by Andrés Bonifacio, was discovered by Spanish authorities. The Philippine Revolution began, and Rizal was implicated despite his advocacy for peaceful reforms.</p>
      
      <h3>Arrest and Return to Manila</h3>
      <p>On July 31, 1896, Rizal was arrested in Dapitan and brought back to Manila. He was imprisoned in Fort Santiago while awaiting trial.</p>
      
      <h4>Charges Against Rizal:</h4>
      <ul>
        <li>Founding illegal organizations (La Liga Filipina)</li>
        <li>Publishing seditious novels</li>
        <li>Inciting rebellion through his writings</li>
        <li>Corresponding with revolutionaries abroad</li>
      </ul>
      
      <h3>The Trial</h3>
      <p>Rizal's trial was conducted by a military court. Despite the efforts of his defense lawyer, the outcome was predetermined by the Spanish authorities.</p>
      
      <h4>Trial Details:</h4>
      <ul>
        <li><strong>Court:</strong> Military tribunal</li>
        <li><strong>Defense:</strong> Lt. Luis Taviel de Andrade</li>
        <li><strong>Verdict:</strong> Guilty of sedition and rebellion</li>
        <li><strong>Sentence:</strong> Death by firing squad</li>
      </ul>
      
      <h3>Final Days</h3>
      <p>In his final days, Rizal wrote his farewell letters and his famous poem "Mi Último Adiós" (My Last Farewell).</p>
      
      <h4>Last Activities:</h4>
      <ul>
        <li>Wrote letters to family and friends</li>
        <li>Composed "Mi Último Adiós"</li>
        <li>Married Josephine Bracken in a religious ceremony</li>
        <li>Maintained his dignity and composure</li>
      </ul>
      
      <h3>Execution - December 30, 1896</h3>
      <p>At 7:03 AM on December 30, 1896, José Rizal was executed by firing squad at Bagumbayan Field (now Rizal Park) in Manila.</p>
      
      <h4>Final Moments:</h4>
      <ul>
        <li>Refused to kneel or be blindfolded</li>
        <li>Asked to face the firing squad</li>
        <li>Shouted "Consummatum est!" (It is finished!)</li>
        <li>Fell backward, facing the sky</li>
      </ul>
      
      <h3>Legacy and Martyrdom</h3>
      <p>Rizal's execution sparked greater revolutionary fervor among Filipinos. His death transformed him from a reformist into a martyr and the foremost symbol of Filipino nationalism.</p>
      
      <h4>Impact of His Death:</h4>
      <ul>
        <li>Intensified the Philippine Revolution</li>
        <li>United Filipinos in their struggle for independence</li>
        <li>Inspired future generations of patriots</li>
        <li>Established him as the national hero</li>
      </ul>
    `,
  },
}

const completedSections = new Set()

function navigateToContent(contentId) {
  const content = contentData[contentId]
  if (content) {
    document.getElementById("modalTitle").textContent = content.title
    document.getElementById("modalContent").innerHTML = content.content
    document.getElementById("contentModal").style.display = "block"
    document.body.style.overflow = "hidden"

    // Store current content ID for completion tracking
    window.currentContentId = contentId
  }
}

function closeModal() {
  document.getElementById("contentModal").style.display = "none"
  document.body.style.overflow = "auto"
}

function markAsCompleted() {
  if (window.currentContentId) {
    completedSections.add(window.currentContentId)
    updateProgress()
    closeModal()

    // Show completion message
    showNotification("Section completed! Great job!", "success")
  }
}

function updateProgress() {
  const totalSections = Object.keys(contentData).length
  const completed = completedSections.size
  const percentage = Math.round((completed / totalSections) * 100)

  // Update progress display
  document.querySelector(".progress-stats .progress-number").textContent = completed
  document.querySelector(".progress-stats .progress-item:last-child .progress-number").textContent = percentage + "%"
  document.querySelector(".progress-fill").style.width = percentage + "%"

  // Update progress text
  const progressText = document.querySelector(".progress-text")
  if (percentage === 100) {
    progressText.textContent = "Congratulations! You have completed all sections!"
    progressText.style.color = "var(--light-beige)"
  } else if (percentage > 0) {
    progressText.textContent = `Keep going! You're ${percentage}% through your learning journey.`
  }
}

function openDetailedContent() {
  showNotification("Detailed content feature coming soon!", "info")
}

function downloadStudyGuide() {
  showNotification("Study guide download feature coming soon!", "info")
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--dark-brown);
    color: var(--white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    z-index: 1001;
    animation: slideInRight 0.3s ease;
  `

  if (type === "success") {
    notification.style.backgroundColor = "var(--light-brown)"
  } else if (type === "info") {
    notification.style.backgroundColor = "var(--medium-brown)"
  }

  document.body.appendChild(notification)

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("contentModal")
  if (event.target === modal) {
    closeModal()
  }
}

// Add notification animations
const notificationStyles = document.createElement("style")
notificationStyles.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`
document.head.appendChild(notificationStyles)
