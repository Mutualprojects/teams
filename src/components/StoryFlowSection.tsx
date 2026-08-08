'use client';

import React from 'react';
import FlowArt, { FlowSection } from './ui/story-scroll';

export default function StoryFlowSection() {
  return (
    <div style={{ position: 'relative', width: '100%', zIndex: 20 }}>
      <FlowArt aria-label="Team 7 Story Flow">
        
        {/* ─── SECTION 1: THE REVOLUTION ─────────────────────────── */}
        <FlowSection 
          index={0}
          aria-label="Revolutionizing Indian Sports" 
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(27,42,94,0.7), rgba(27,42,94,0.95)), url("/94209.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff' 
          }}
        >
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#D8232A', margin: 0 }}>01 — The Revolution</p>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)' }} />
            <div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', fontWeight: 'bold', lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff', margin: 0 }}>
                Unstoppable
                <br />
                Leagues
              </h1>
            </div>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)' }} />
            <p style={{ marginTop: 'auto', maxWidth: '50ch', fontSize: 'clamp(1rem, 2vw, 1.8rem)', fontWeight: 'normal', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 'auto 0 0 0' }}>
              India doesn&apos;t just play sport — it lives it. From dusty kabaddi grounds to prime-time floodlit arenas, we build professional ecosystems that transform homegrown passion into national legacies, elevating athletes from tier-2 cities into global icons.
            </p>
          </div>
        </FlowSection>

        {/* ─── SECTION 2: GROUND EXPERTISE ─────────────────────── */}
        <FlowSection 
          index={1}
          aria-label="Ground Expertise" 
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(216,35,42,0.7), rgba(216,35,42,0.95)), url("/2149734149.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff' 
          }}
        >
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.8)', margin: 0 }}>02 — Ground Expertise</p>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)' }} />
            <div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', fontWeight: 'bold', lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff', margin: 0 }}>
                Built On
                <br />
                Ground
                <br />
                Truth
              </h2>
            </div>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)' }} />
            <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '3vw' }}>
              <div style={{ minWidth: '180px', flex: 1 }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)' }}>Flawless Operations</p>
                <p style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                  Executing massive stadium logistics, secure athlete management, and high-fidelity fan experiences across the country.
                </p>
              </div>
              <div style={{ minWidth: '180px', flex: 1 }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)' }}>Broadcast Grade</p>
                <p style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                  Delivering cutting-edge, low-latency live feeds that bring the raw emotion of the arena straight to millions of screens.
                </p>
              </div>
              <div style={{ minWidth: '180px', flex: 1 }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)' }}>Pro Circuit</p>
                <p style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                  Pioneering structured, high-velocity sporting leagues tailored exclusively for the diverse Indian demographic.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* ─── SECTION 3: STRATEGIC PILLARS ──────────────────── */}
        <FlowSection 
          index={2}
          aria-label="Strategic Pillars" 
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(248,249,250,0.85), rgba(248,249,250,0.95)), url("/statergic.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#1B2A5E' 
          }}
        >
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#D8232A', margin: 0 }}>03 — Strategic Pillars</p>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />
            <div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', fontWeight: 'bold', lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#1B2A5E', margin: 0 }}>
                Building
                <br />
                Legacies
              </h2>
            </div>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />
            <p style={{ maxWidth: '60ch', fontSize: 'clamp(1rem, 2vw, 1.8rem)', fontWeight: 'normal', lineHeight: 1.6, color: 'rgba(27,42,94,0.8)', margin: '1rem 0 0 0' }}>
              Four unified capabilities that allow us to conceive, construct, broadcast, and scale sports properties nationwide. We don&apos;t just host events; we forge sustainable sporting empires.
            </p>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />
            <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '3vw' }}>
              <div style={{ minWidth: '180px', flex: 1 }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#D8232A' }}>League IP</p>
                <p style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', margin: 0 }}>
                  End-to-end tournament concept to broadcast execution.
                </p>
              </div>
              <div style={{ minWidth: '180px', flex: 1 }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#D8232A' }}>Scouting</p>
                <p style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', margin: 0 }}>
                  Direct grassroots-to-pro athletic development pipelines.
                </p>
              </div>
              <div style={{ minWidth: '180px', flex: 1 }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#D8232A' }}>Brand Synergy</p>
                <p style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', margin: 0 }}>
                  High-ROI sponsorship alignment with passionate audiences.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* ─── SECTION 4: FUTURE & CALL TO ACTION ──────────────── */}
        <FlowSection 
          index={3}
          aria-label="Future & Call to Action" 
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(10,17,40,0.7), rgba(10,17,40,0.95)), url("/shape.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff' 
          }}
        >
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#D8232A', margin: 0 }}>04 — Join The Movement</p>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />
            <div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', fontWeight: 'bold', lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff', margin: 0 }}>
                Shape
                <br />
                The Future
              </h2>
            </div>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />
            <p style={{ marginTop: 'auto', maxWidth: '50ch', fontSize: 'clamp(1rem, 2vw, 1.8rem)', fontWeight: 'normal', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 'auto 0 0 0' }}>
              Whether you are a brand seeking high-visibility sports activation, a federation aiming to launch a league, or an investor looking for untapped potential — partner with Team 7 today. Let&apos;s build the next generation of sporting excellence together.
            </p>
            <hr style={{ margin: '1.5vh 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#D8232A', lineHeight: 1 }}>14+</div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Years Execution</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#D8232A', lineHeight: 1 }}>50K+</div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Athletes &amp; Fans</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#D8232A', lineHeight: 1 }}>8+</div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Major Leagues</div>
              </div>
            </div>
          </div>
        </FlowSection>

      </FlowArt>
    </div>
  );
}
