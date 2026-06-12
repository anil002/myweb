import { useState, FormEvent, ChangeEvent } from 'react';
import { Plus, ImagePlus, Upload, Calendar, FileText, Sparkles } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
  onCreate: (post: BlogPost) => void;
}

export default function BlogSection({ posts, onCreate }: BlogSectionProps) {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (!file) return;
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !summary.trim() || !content.trim()) return;

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title: title.trim(),
      summary: summary.trim(),
      content: content.trim(),
      imageDataUrl: imagePreview,
      createdAt: new Date().toISOString(),
    };

    onCreate(newPost);
    setTitle('');
    setSummary('');
    setContent('');
    setImagePreview(undefined);
    setImageFile(null);
  };

  return (
    <section id="blog" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
            <Sparkles className="w-4 h-4" />
            Scientific Blog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Publish Scientific Insights</h2>
          <p className="text-slate-400 text-base">Share your research updates, experiment summaries, and photo-supported science posts directly on your portfolio.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-850 rounded-3xl p-8 shadow-xl shadow-emerald-500/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-mono uppercase tracking-[0.35em] text-slate-500">New Post</p>
                  <h3 className="text-xl font-semibold text-white mt-2">Create a photo-backed blog entry</h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-xs text-slate-300">
                  <Upload className="w-4 h-4 text-emerald-400" />
                  Upload image + content
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Title</span>
                    <input
                      type="text"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      placeholder="E.g. Advancing drought prediction with radar and EO"
                      className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Summary</span>
                    <input
                      type="text"
                      value={summary}
                      onChange={(event) => setSummary(event.target.value)}
                      placeholder="A brief science highlight in one sentence"
                      className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Content</span>
                  <textarea
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    rows={6}
                    placeholder="Write your scientific post here. Add experiment details, findings, or field observations."
                    className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 inline-flex items-center gap-2">
                    <ImagePlus className="w-4 h-4 text-emerald-400" />
                    Upload header image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-slate-300"
                  />
                </label>

                {imagePreview && (
                  <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
                    <img src={imagePreview} alt="Blog preview" className="w-full object-cover" />
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-3xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  <Plus className="w-4 h-4" />
                  Publish Post
                </button>
              </form>
            </div>

            <div className="space-y-6">
              {posts.length === 0 ? (
                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-slate-400">
                  No blog entries yet. Use the form to publish your first scientific note.
                </div>
              ) : (
                posts.map((post) => (
                  <article key={post.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg shadow-emerald-500/5">
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4 text-slate-400">
                      <span className="text-xs uppercase tracking-[0.35em]">Posted</span>
                      <span className="text-xs font-mono">{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="space-y-4">
                      {post.imageDataUrl && (
                        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950">
                          <img src={post.imageDataUrl} alt={post.title} className="w-full object-cover" />
                        </div>
                      )}
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-emerald-400 font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          Scientific Insight
                        </div>
                        <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
                        <p className="text-slate-400">{post.summary}</p>
                      </div>
                      <p className="text-sm leading-7 text-slate-300">{post.content}</p>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/30">
              <div className="flex items-center gap-3 mb-5 text-emerald-400">
                <FileText className="w-5 h-5" />
                <div>
                  <h4 className="text-base font-semibold text-white">Blog publishing details</h4>
                  <p className="text-sm text-slate-400">Create science content that visitors can read directly from your portfolio.</p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>• Add a title and a research-focused summary</li>
                <li>• Paste your scientific narrative in the content field</li>
                <li>• Upload a photo for richer visual context</li>
                <li>• Posts are saved locally in the browser</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
              <p className="text-sm leading-6">Note: this is a front-end blog workflow. For server-backed uploads, connect the form to a backend or CMS later.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
