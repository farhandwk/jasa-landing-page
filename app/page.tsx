import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Instagram, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

import vercel from '@/app/assets/vercel.png'
import next_js from '@/app/assets/next-js.png'
import github from '@/app/assets/github.png'

import preview from './assets/preview.jpeg'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
          </div>
          <h1 className="text-5xl md:text-7xl font-[aeonik-bold] text-[#222222] mb-6">
            Jasa Pembuatan<br />
            <span className="text-[#222222]">
              Landing Page
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#7B7B7B] font-[aeonik] mb-4">
            BY FARHAN DWIKI ARDHANI
          </p>
          <a href='https://wa.me/+6285157576316?text=Hi%20saya%20ingin%20berkonsultasi%20mengenai%20jasa%20pembuatan%20landing%20page'>
            <button className="mt-8 px-8 py-4 bg-[#222222] text-[#F8F8F8] rounded-full font-[aeonik-bold] text-lg hover:bg-[#7B7B7B] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Mulai Konsultasi
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </section>

      {/* About Landing Page */}
      <section className="py-20 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-[aeonik-bold] text-[#222222] mb-12">
                Landing Page
              </h2>
              <p className="text-lg text-[#222222] font-[aeonik] leading-relaxed text-justify">
                Melayani jasa pembuatan landing page profesional sesuai dengan kebutuhan bisnis anda. 
                Landing Page dapat digunakan sebagai halaman web tunggal yang dirancang khusus dengan 
                satu fokus utama, seperti mengumpulkan data calon pelanggan (leads), mempromosikan 
                produk/event spesifik, atau mendorong pendaftaran/pembelian.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-[#7B7B7B] rounded-2xl flex items-center justify-center">
                <Image src={preview} alt='preview landing page' className='w-56'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-[#F8F8F8] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-[aeonik-bold] text-center text-[#222222] mb-16">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-[#f8f8f8] p-8 rounded-2xl hover:bg-[#7B7B7B] transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#222222]">
              <Image src={next_js} alt='vercel logo' className='w-48'/>
              <h3 className="text-2xl font-[aeonik-bold] text-[#222222] mb-3">Next JS</h3>
              <p className="text-[#222222] font-[aeonik]">Framework website modern yang andal.</p>
            </div>
            
            <div className="flex flex-col items-center bg-[#f8f8f8] p-8 rounded-2xl hover:bg-[#7B7B7B] transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#222222]">
              <Image src={vercel} alt='vercel logo' className='w-48'/>
              <h3 className="text-2xl font-[aeonik-bold] text-[#222222] mb-3">Vercel</h3>
              <p className="text-[#222222] font-[aeonik]">Platform deploy website dengan paket free tier yang bisa diandalkan.</p>
            </div>
            
            <div className="flex flex-col items-center bg-[#f8f8f8] p-8 rounded-2xl hover:bg-[#7B7B7B] transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#222222]">
              <Image src={github} alt='vercel logo' className='w-48'/>
              <h3 className="text-2xl font-[aeonik-bold] text-[#222222] mb-3">Github</h3>
              <p className="text-[#222222] font-[aeonik]">Platform repository untuk menyimpan source code yang bisa diakses selamanya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Pembuatan Website */}
      <section className="py-20 px-4 bg-[#222222]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-[aeonik-bold] text-center text-[#F8F8F8] mb-16">
            Flow Pembuatan Website
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 1, title: "Diskusi bersama client berkaitan dengan kebutuhan website" },
              { phase: 2, title: "Pengisian brief website oleh client" },
              { phase: 3, title: "Pembuatan design website sesuai brief" },
              { phase: 4, title: "Revisi design oleh client" },
              { phase: 5, title: "Pembuatan website sesuai design yang telah disepakati" },
              { phase: 6, title: "Revisi website oleh client" },
              { phase: 7, title: "Pembelian domain dibantu oleh developer" },
              { phase: 8, title: "Fiksasi Keseluruhan" }
            ].map((item) => (
              <div key={item.phase} className="bg-[#F8F8F8] p-6 rounded-xl border-4 border-[#7B7B7B] hover:border-[#F8F8F8] transition-all duration-300">
                <div className="w-12 h-12 bg-[#222222] text-[#F8F8F8] rounded-full flex items-center justify-center font-[aeonik-bold] text-xl mb-4">
                  {item.phase}
                </div>
                <h3 className="font-[aeonik] text-[#222222] text-sm leading-relaxed">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-[aeonik-bold] text-center text-[#222222] mb-16">
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="bg-[#222222] rounded-2xl p-8 border-4 border-[#7B7B7B] transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-[aeonik-bold] text-[#F8F8F8] mb-2">Basic</h3>
                <div className="text-4xl font-[aeonik-bold] text-[#F8F8F8] mb-2">Rp. 250.000</div>
                <p className="text-[#F8F8F8] font-[aeonik]">Single-Page Website</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Maksimal 5 section</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Responsive Design, Setup SEO Basic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Fitur custom landing page (backlink button, formulir kontak dll)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Dibantu setup hosting dan repository (vercel & github)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Dibantu pembelian dan setup domain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">3 kali revisi design & 3 kali revisi website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">3 - 7 hari pengerjaan (tergantung revisi)</span>
                </li>
              </ul>
              <a href='https://wa.me/+6285157576316?text=Hi%20saya%20ingin%20mengambil%20paket%20basic%20untuk%20pembuatan%20landing%20page'>
                <button className="w-full py-4 bg-[#F8F8F8] text-[#222222] rounded-xl font-[aeonik-bold] text-lg hover:bg-[#7B7B7B] hover:text-[#F8F8F8] transition-all duration-300">
                  Pilih Paket Basic
                </button>
              </a>
            </div>

            {/* Plus Plan */}
            <div className="bg-[#222222] rounded-2xl p-8 border-4 border-[#F8F8F8] transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-4 right-8 bg-[#F8F8F8] text-[#222222] px-4 py-2 rounded-full font-[aeonik-bold]">
                POPULAR
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-3xl font-[aeonik-bold] text-[#F8F8F8] mb-2">Plus</h3>
                <div className="text-4xl font-[aeonik-bold] text-[#F8F8F8] mb-2">Rp. 400.000</div>
                <p className="text-[#F8F8F8] font-[aeonik]">Multi-Page Website</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Maksimal 5 halaman terpisah (5 section setiap halaman)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Responsive Design, Setup SEO Basic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Fitur custom landing page (backlink button, formulir kontak dll)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Dibantu setup hosting dan repository (vercel & github)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">Dibantu pembelian dan setup domain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">5 kali revisi design & 5 kali revisi website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8F8F8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F8F8F8] font-[aeonik]">4 - 10 hari pengerjaan (tergantung revisi)</span>
                </li>
              </ul>
              <a href='https://wa.me/+6285157576316?text=Hi%20saya%20ingin%20mengambil%20paket%20plus%20untuk%20pembuatan%20landing%20page'>
                <button className="w-full py-4 bg-[#F8F8F8] text-[#222222] rounded-xl font-[aeonik-bold] text-lg hover:bg-[#7B7B7B] hover:text-[#F8F8F8] transition-all duration-300">
                  Pilih Paket Plus
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-[#222222]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-[aeonik-bold] text-[#F8F8F8] mb-4">
            Contact Info
          </h2>
          <p className="text-xl text-[#F8F8F8] font-[aeonik] mb-12">
            Let's grow your brand together.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="tel:+6285157576316" className="flex items-center gap-4 p-6 bg-[#F8F8F8] rounded-xl hover:bg-[#7B7B7B] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#F8F8F8]" />
              </div>
              <div className="text-left">
                <div className="text-sm text-[#7B7B7B] font-[aeonik-bold] group-hover:text-[#F8F8F8]">PHONE NUMBER</div>
                <div className="text-[#222222] font-[aeonik] group-hover:text-[#F8F8F8]">+6285157576316</div>
              </div>
            </a>
            
            <a href="https://website-pribadi-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-[#F8F8F8] rounded-xl hover:bg-[#7B7B7B] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#F8F8F8]" />
              </div>
              <div className="text-left">
                <div className="text-sm text-[#7B7B7B] font-[aeonik-bold] group-hover:text-[#F8F8F8]">WEBSITE</div>
                <div className="text-[#222222] font-[aeonik] group-hover:text-[#F8F8F8]">www.farhanportfolio.my.id</div>
              </div>
            </a>
            
            <a href="mailto:farhandwiki15@gmail.com" className="flex items-center gap-4 p-6 bg-[#F8F8F8] rounded-xl hover:bg-[#7B7B7B] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#F8F8F8]" />
              </div>
              <div className="text-left">
                <div className="text-sm text-[#7B7B7B] font-[aeonik-bold] group-hover:text-[#F8F8F8]">EMAIL</div>
                <div className="text-[#222222] font-[aeonik] group-hover:text-[#F8F8F8]">farhandwiki15@gmail.com</div>
              </div>
            </a>
            
            <a href="https://instagram.com/farhan_dwiar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-[#F8F8F8] rounded-xl hover:bg-[#7B7B7B] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-[#F8F8F8]" />
              </div>
              <div className="text-left">
                <div className="text-sm text-[#7B7B7B] font-[aeonik-bold] group-hover:text-[#F8F8F8]">INSTAGRAM</div>
                <div className="text-[#222222] font-[aeonik] group-hover:text-[#F8F8F8]">@farhan_dwiar</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#F8F8F8] text-center border-t-4 border-[#222222]">
        <p className="text-[#7B7B7B] font-[aeonik]">
          © 2025 Farhan Dwiki Ardhani. All rights reserved.
        </p>
      </footer>
    </div>
  );
}