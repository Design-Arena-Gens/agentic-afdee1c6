'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#2A2A2A'
      ctx.lineWidth = 0.5

      const spacing = 60
      const offset = (scrollY * 0.3) % spacing

      for (let x = -offset; x < canvas.width / 2; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height / 2)
        ctx.stroke()
      }

      for (let y = -offset; y < canvas.height / 2; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width / 2, y)
        ctx.stroke()
      }
    }

    drawGrid()
  }, [scrollY])

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.gridCanvas} />

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>AccrueFlow.com</span>
          </div>
          <nav className={styles.nav}>
            <a href="#platform" className={styles.navLink}>Platform</a>
            <a href="#approach" className={styles.navLink}>Approach</a>
            <a href="#access" className={styles.navLink}>Access</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Your Private Equity<br />Cash Flow.<br />Visualized. Guaranteed.
            </h1>
            <p className={styles.heroSubtitle}>
              AI-powered command center for ultra-high-net-worth investors.<br />
              Never miss a capital call. Never chase distributions.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.ctaPrimary}>Request Access</button>
              <a href="#platform" className={styles.ctaSecondary}>See the Platform</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <span className={styles.dataCardLabel}>Portfolio Overview</span>
                <span className={styles.dataCardValue}>$47.2M</span>
              </div>
              <div className={styles.dataCardGrid}>
                <div className={styles.dataMetric}>
                  <span className={styles.metricLabel}>Pending Calls</span>
                  <span className={styles.metricValue}>$2.4M</span>
                </div>
                <div className={styles.dataMetric}>
                  <span className={styles.metricLabel}>Distributions</span>
                  <span className={styles.metricValue}>$1.8M</span>
                </div>
                <div className={styles.dataMetric}>
                  <span className={styles.metricLabel}>Active Positions</span>
                  <span className={styles.metricValue}>14</span>
                </div>
                <div className={styles.dataMetric}>
                  <span className={styles.metricLabel}>IRR</span>
                  <span className={styles.metricValue}>23.4%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className={styles.section}>
          <div className={styles.sectionContent}>
            <span className={styles.sectionLabel}>The Platform</span>
            <h2 className={styles.sectionTitle}>
              Command center for<br />illiquid excellence
            </h2>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>01</div>
                <h3 className={styles.featureTitle}>Automated Capital Call Tracking</h3>
                <p className={styles.featureDescription}>
                  AI monitors your inbox. Extracts deadlines. Confirms wire transfers. Zero manual reconciliation.
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>02</div>
                <h3 className={styles.featureTitle}>Distribution Intelligence</h3>
                <p className={styles.featureDescription}>
                  Predict distributions 90 days in advance using fund performance data and historical patterns.
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>03</div>
                <h3 className={styles.featureTitle}>Liquidity Modeling</h3>
                <p className={styles.featureDescription}>
                  Stress-test cash positions across 100+ scenarios. Never scramble for liquidity.
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>04</div>
                <h3 className={styles.featureTitle}>Portfolio Synthesis</h3>
                <p className={styles.featureDescription}>
                  Unified view across direct investments, fund commitments, and secondary positions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.dataSection}>
          <div className={styles.dataSectionContent}>
            <div className={styles.dataDisplay}>
              <div className={styles.dataLine}>
                <span className={styles.dataKey}>Clients protected from missed calls</span>
                <span className={styles.dataValue}>100%</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.dataKey}>Average AUM under management</span>
                <span className={styles.dataValue}>$127M</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.dataKey}>Hours saved per quarter</span>
                <span className={styles.dataValue}>142</span>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className={styles.section}>
          <div className={styles.sectionContent}>
            <span className={styles.sectionLabel}>The Approach</span>
            <h2 className={styles.sectionTitle}>
              Built for principals who<br />demand precision
            </h2>
            <div className={styles.approachGrid}>
              <div className={styles.approachItem}>
                <h4 className={styles.approachTitle}>Bank-grade security</h4>
                <p className={styles.approachText}>
                  SOC 2 Type II certified. Data encrypted at rest and in transit. Zero-knowledge architecture.
                </p>
              </div>
              <div className={styles.approachItem}>
                <h4 className={styles.approachTitle}>White-glove onboarding</h4>
                <p className={styles.approachText}>
                  Dedicated implementation team. 30-day integration. Custom workflows for your family office.
                </p>
              </div>
              <div className={styles.approachItem}>
                <h4 className={styles.approachTitle}>Always-on intelligence</h4>
                <p className={styles.approachText}>
                  AI monitors 24/7. Alerts via Signal, SMS, or private Slack. Nothing falls through.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="access" className={styles.accessSection}>
          <div className={styles.accessContent}>
            <h2 className={styles.accessTitle}>Accrue Flow is invitation-only</h2>
            <p className={styles.accessDescription}>
              We work with a limited number of family offices and UHNW principals.<br />
              Minimum AUM: $30M in private markets exposure.
            </p>
            <form className={styles.accessForm}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Full name" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email address" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Assets under management" className={styles.input} />
              </div>
              <button type="submit" className={styles.submitButton}>Submit Application</button>
            </form>
            <p className={styles.accessFootnote}>
              Applications reviewed within 48 hours. We decline most requests.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <span className={styles.footerLogo}>AccrueFlow.com</span>
            <p className={styles.footerTagline}>Your Private Equity Cash Flow. Visualized. Guaranteed.</p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerSection}>
              <h5 className={styles.footerHeading}>Platform</h5>
              <a href="#" className={styles.footerLink}>Features</a>
              <a href="#" className={styles.footerLink}>Security</a>
              <a href="#" className={styles.footerLink}>Pricing</a>
            </div>
            <div className={styles.footerSection}>
              <h5 className={styles.footerHeading}>Company</h5>
              <a href="#" className={styles.footerLink}>About</a>
              <a href="#" className={styles.footerLink}>Privacy</a>
              <a href="#" className={styles.footerLink}>Terms</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>© 2025 Accrue Flow. Not FDIC insured. Not investment advice.</p>
        </div>
      </footer>
    </div>
  )
}
