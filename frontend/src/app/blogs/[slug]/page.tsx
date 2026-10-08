import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, blogs } from "@/data/blogs";
import { ArrowLeft, Clock, Calendar, User, Tag, Phone, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `${blog.title} | VisionSquare Infra Nagpur`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  return (
    <>
      <style>{`
        :root {
          --cream: #F8F7F3;
          --gold: #EEAF33;
          --navy: #284153;
          --dark: #172027;
          --white: #ffffff;
          --text-muted: #5b6a75;
          --border-light: rgba(23, 32, 39, 0.12);
          --font-heading: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .blog-article-hero {
          background: linear-gradient(135deg, #F8F7F3 0%, #ffffff 55%, #F8F7F3 100%);
          padding: 140px 0 60px;
          border-bottom: 2px solid var(--gold);
          position: relative;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 22px;
          width: 100%;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .breadcrumb a {
          color: var(--navy);
          text-decoration: none;
          font-weight: 600;
        }

        .category-badge {
          display: inline-block;
          background: rgba(238, 175, 51, 0.18);
          color: var(--dark);
          border: 1px solid var(--gold);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }

        .article-h1 {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--dark);
          margin-bottom: 24px;
          max-width: 900px;
        }

        .meta-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          font-size: 0.88rem;
          color: var(--text-muted);
          padding-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .article-body-wrapper {
          padding: 60px 0 90px;
          background: var(--white);
        }

        .article-grid {
          display: grid;
          grid-template-columns: 2.5fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .article-content {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--dark);
        }

        .article-content h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--navy);
          margin: 32px 0 16px;
        }

        .article-content p {
          margin-bottom: 20px;
          color: #334155;
        }

        .article-content ul, .article-content ol {
          margin: 20px 0 28px 24px;
          color: #334155;
        }

        .article-content li {
          margin-bottom: 10px;
        }

        .cta-sidebar-card {
          background: var(--cream);
          border: 1px solid var(--border-light);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          position: sticky;
          top: 120px;
        }

        .sidebar-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
        }

        .btn-sidebar-gold {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--gold);
          color: var(--dark);
          font-weight: 700;
          padding: 14px 20px;
          border-radius: 50px;
          text-decoration: none;
          margin-top: 20px;
          transition: all 0.3s ease;
        }

        .btn-sidebar-gold:hover {
          background: #f5b942;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(238, 175, 51, 0.35);
        }

        @media (max-width: 860px) {
          .article-grid {
            grid-template-columns: 1fr;
          }
          .blog-article-hero {
            padding-top: 120px;
          }
        }
      `}</style>

      {/* ARTICLE HERO */}
      <section className="blog-article-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blogs">Blogs & Insights</Link>
            <ChevronRight size={14} />
            <span>Article</span>
          </div>

          <span className="category-badge">{blog.category}</span>
          <h1 className="article-h1">{blog.title}</h1>

          <div className="meta-bar">
            <div className="meta-item">
              <User size={16} className="text-[#EEAF33]" />
              <span>{blog.author}</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} className="text-[#EEAF33]" />
              <span>{blog.publishedAt}</span>
            </div>
            <div className="meta-item">
              <Clock size={16} className="text-[#EEAF33]" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <main className="article-body-wrapper">
        <div className="container">
          <div className="article-grid">
            {/* Article Content */}
            <article className="article-content">
              <p className="font-semibold text-lg text-slate-700 leading-relaxed mb-6">
                {blog.excerpt}
              </p>
              {blog.content ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              ) : (
                <p>Detailed insight content for {blog.title} is coming soon.</p>
              )}

              <div className="mt-12 pt-8 border-t border-slate-200">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 font-bold text-[#284153] hover:text-[#EEAF33] transition-colors"
                >
                  <ArrowLeft size={18} />
                  <span>Back to all articles</span>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="cta-sidebar-card">
                <h3 className="sidebar-title">Need Property Advice in Nagpur?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As your channel partner, VisionSquare Infra helps you shortlist verified residential projects and plots, arrange free site visits, and guide your booking.
                </p>
                <Link href="/contact#enquiry" className="btn-sidebar-gold">
                  <span>Send Enquiry</span>
                  <span>→</span>
                </Link>
                <a
                  href="tel:[Your Phone Number]"
                  className="mt-3 flex items-center justify-center gap-2 border border-[#284153] text-[#284153] font-bold py-3 px-5 rounded-full text-sm hover:bg-[#284153] hover:text-white transition-all text-center"
                >
                  <Phone size={15} />
                  <span>Call Our Team</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
