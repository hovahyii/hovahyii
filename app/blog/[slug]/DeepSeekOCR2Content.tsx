'use client';

import Image from 'next/image';

export default function DeepSeekOCR2Content() {
    return (
        <div className="prose lg:prose-xl max-w-none">
            <div className="mb-8 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 font-semibold">AI Zero Distance • 27/01/2026</p>
                <h1 className="text-3xl font-extrabold mt-3 mb-4 text-slate-900 dark:text-white">🐋 DeepSeek-OCR 2 Takes First Place Again! AI Reads Like a Human, Pioneers "Causal Flow" Visual Reasoning</h1>

                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm mt-4">
                    <p className="font-bold text-lg mb-2">TL;DR Summary:</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                        <li><strong>Paradigm Shift:</strong> Moves from "fixed scanning" to "semantic reasoning" using DeepEncoder V2.</li>
                        <li><strong>Causal Flow:</strong> Introduces Causal Flow Visual Reasoning to handle complex layouts logically.</li>
                        <li><strong>Extreme Efficiency:</strong> Covers complex documents with just 256-1120 visual tokens.</li>
                        <li><strong>Top Performance:</strong> Achieved 91.09% on OmniDocBench v1.5, surpassing previous baselines.</li>
                        <li><strong>Open Source:</strong> Model, weights, and paper are all fully open-sourced.</li>
                    </ul>
                </div>
            </div>

            <p>
                DeepSeek has updated again!
            </p>
            <p>
                This time, it's an update to the DeepSeek-OCR model originally launched in October 2025.
            </p>
            <p>
                When DeepSeek-OCR was first released, it sparked widespread discussion about visual compression. This time, DeepSeek is taking visual encoding to the next level.
            </p>
            <p>
                It can be said that the newly released <strong>DeepSeek-OCR 2</strong>, through the introduction of the <strong>DeepEncoder V2 architecture</strong>, has achieved a paradigm shift in visual encoding from "fixed scanning" to "semantic reasoning"!
            </p>
            <p>
                And of course, as with almost every DeepSeek release, the model and technical report are fully open-sourced.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/github.png"
                    alt="DeepSeek-OCR 2 Github"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 my-6">
                <ul className="space-y-2 font-mono text-sm break-all">
                    <li>• <strong>Project Address:</strong> <a href="https://github.com/deepseek-ai/DeepSeek-OCR-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/deepseek-ai/DeepSeek-OCR-2</a></li>
                    <li>• <strong>Paper Address:</strong> <a href="https://github.com/deepseek-ai/DeepSeek-OCR-2/blob/main/DeepSeek_OCR2_paper.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DeepSeek_OCR2_paper.pdf</a></li>
                    <li>• <strong>Model Address:</strong> <a href="https://huggingface.co/deepseek-ai/DeepSeek-OCR-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">huggingface.co/deepseek-ai/DeepSeek-OCR-2</a></li>
                </ul>
            </div>

            <p>
                The three authors of this research are Haoran Wei, Yaofeng Sun, and Yukun Li.
            </p>
            <p>
                Specifically, the core innovation of this research lies in replacing the original CLIP-based encoder with a lightweight language model (Qwen2-500M) and introducing "Causal Flow Queries" with a causal attention mechanism.
            </p>
            <p>
                This design breaks the limitation of traditional models that must process images in a raster order (left-to-right, top-to-bottom). It empowers the encoder to dynamically reorder Visual Tokens based on image semantics. Through this two-stage cascaded 1D causal reasoning structure (encoder reordering & decoder parsing), the model can more accurately reconstruct the natural reading logic of complex documents (such as those with tables, formulas, and multi-column layouts).
            </p>
            <p>
                It's like installing "human reading logic" into the machine, so AI is no longer just mechanically scanning images. In contrast, traditional AI is like a rigid photocopier—no matter how complex the page content is, it just scans row by row from top-left to bottom-right.
            </p>
            <p>
                While maintaining extremely high data compression efficiency, DeepSeek-OCR 2 has achieved significant breakthroughs in multiple benchmarks and production metrics. The model only needs <strong>256 to 1120 visual tokens</strong> to cover complex document pages. This is an extremely low level compared to similar models, significantly reducing the computational overhead for downstream LLMs.
            </p>
            <p>
                In the OmniDocBench v1.5 evaluation, its comprehensive score reached <strong>91.09%</strong>, a 3.73% improvement over the previous generation, showing particularly strong logic in reading order identification.
            </p>
            <p>
                Furthermore, in actual production environments, this model significantly reduced the repetition rate of OCR recognition results and provided a feasible path for building a unified omni-modal encoder in the future. Yes, in the future, the same AI "brain" might use the same method to process sound, video, and all other modalities, truly achieving deep unification of multiple modalities.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">DeepSeek-OCR 2 Architecture</h2>

            <p>
                As shown in Figure 3, DeepSeek-OCR 2 continues the overall architecture of DeepSeek-OCR, consisting of an <strong>encoder</strong> and a <strong>decoder</strong>. The encoder is responsible for discretizing the image into visual tokens, while the decoder generates output under the conditional constraints of these visual tokens and text prompts.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/encoder.png"
                    alt="DeepSeek-OCR 2 Architecture"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                The key difference lies in the encoder part: DeepSeek upgraded the original DeepEncoder to <strong>DeepEncoder V2</strong>. While fully retaining the capabilities of the previous generation, DeepEncoder V2 introduces <strong>causal reasoning</strong> capabilities through a completely new architectural design.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">DeepEncoder V2</h3>

            <p>
                The first component of DeepEncoder V2 is the <strong>vision tokenizer</strong>. Continuing the design of DeepEncoder, DeepSeek adopts an architecture composed of an 80 million parameter SAM-base and two convolution layers. Compared to DeepEncoder, DeepSeek reduced the output dimension of the final convolution layer from 1024 to 896 to align with the subsequent processing flow.
            </p>
            <p>
                In DeepEncoder, the vision tokenizer was followed by a CLIP ViT for further compression and modeling of visual semantics. DeepEncoder V2 redesigned this component, transforming it into an LLM-like architecture and introducing a <strong>dual-stream attention</strong> mechanism.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Visual Tokens:</strong> Adopt bidirectional attention to preserve the global modeling capability possessed by CLIP.</li>
                <li><strong>Causal Flow Queries:</strong> Newly introduced, using causal attention. These learnable query tokens are appended as a suffix to the visual tokens. Each query can attend to all visual tokens and its preceding query tokens.</li>
            </ul>
            <p>
                By keeping the number of query tokens consistent with visual tokens, this design imposes semantic sorting and distillation constraints on visual features without changing the total number of tokens. Ultimately, only the output of the causal query tokens is sent to the LLM decoder.
            </p>
            <p>
                Overall, this architecture actually builds a two-stage cascaded causal reasoning mechanism: first, the encoder semantically reorders visual tokens through learnable queries; subsequently, the LLM decoder performs autoregressive reasoning on top of this ordered sequence. Unlike traditional encoders that rely on positional encoding to impose rigid spatial order, these causal sorting queries can more naturally fit continuous visual semantics and align highly with the LLM's unidirectional attention pattern. This design aims to build a bridge between 2D spatial structures and 1D causal language modeling.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/token.png"
                    alt="Token Visualization"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                To visualize the attention mechanism of DeepEncoder V2 more intuitively, Figure 5 visualizes its attention mask. This attention mask consists of two distinct regions.
            </p>
            <p>
                The left region adopts a bidirectional attention mechanism for raw visual tokens (similar to ViT), allowing any token to establish visibility with all other tokens, thereby achieving complete global modeling; the right region uses causal attention for causal flow tokens (triangular mask, completely consistent with pure decoder LLMs), where each token can only attend to its predecessors.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/attention.png"
                    alt="Attention Mask"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">DeepSeek-MoE Decoder</h3>
            <p>
                Since the improvement focus of DeepSeek-OCR 2 was mainly on the encoder, the decoder part was not upgraded. Following this design principle, the model continues to use the DeepSeek-OCR decoder—a MoE structure with 3 billion parameters, of which about 500 million parameters are active during inference.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Training Data and Process</h2>

            <p>
                At the data level, DeepSeek-OCR 2 uses the same data sources as DeepSeek-OCR, composed of OCR 1.0, OCR 2.0, and general visual data, with OCR data accounting for 80% of the mixed training data. Two improvements were introduced:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Adopted a more balanced sampling strategy for OCR 1.0 data, dividing pages by content type (text, formula, and table) in a 3:1:1 ratio.</li>
                <li>Optimized layout detection labels by merging semantically similar categories (e.g., unifying "illustration description" and "illustration title").</li>
            </ul>

            <p>
                During the training phase, DeepSeek-OCR 2 is completed in three main stages:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li><strong>Encoder Pre-training:</strong> Gives the vision tokenizer and LLM-style encoder basic capabilities for feature extraction, token compression, and token reordering.</li>
                <li><strong>Query Augmentation:</strong> Further strengthens the encoder's token reordering capability while enhancing visual knowledge compression.</li>
                <li><strong>Decoder Specialization:</strong> Freezes encoder parameters and only optimizes the decoder, thereby achieving higher data throughput under the same FLOPs.</li>
            </ol>

            <p><strong>Detail Breakdown:</strong></p>

            <p>
                <strong>First is training DeepEncoder V2.</strong> Following the methods of DeepSeek-OCR and Vary, DeepEncoder V2 is trained using a language modeling objective, coupling the encoder with a lightweight decoder and optimizing jointly by predicting the next token. 768×768 and 1024×1024 resolution data loaders were used. The vision tokenizer was initialized from DeepEncoder, and the LLM-style encoder was initialized from Qwen2-0.5B-base. After pre-training, only encoder parameters were retained for subsequent stages.
            </p>
            <p>
                This stage used the AdamW optimizer with cosine annealing learning rate (1e-4 to 1e-6), trained for 40k iterations on 160 A100 GPUs (batch size 640), covering about 100 million image-text pair samples.
            </p>

            <p>
                <strong>Second is Query Augmentation.</strong> After DeepEncoder V2 pre-training, it is integrated with DeepSeek-3B-A500M into the final pipeline. The vision tokenizer (SAM-conv structure) is frozen, and the LLM encoder and LLM decoder are jointly optimized to enhance query representation. This stage used 160 GPUs (40GB memory each) with a global batch size of 1280.
            </p>

            <p>
                <strong>Finally, LLM Continuous Training.</strong> To quickly consume training data, this stage freezes all parameters of DeepEncoder V2 and only updates DeepSeek-LLM parameters. This stage accelerated training (more than doubling speed at the same global batch size) and helped the LLM better understand the visual tokens reordered by DeepEncoder V2.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Evaluation Results</h2>

            <p>
                The team selected <strong>OmniDocBench v1.5</strong> as the main evaluation benchmark. This benchmark contains 1355 pages of documents, covering 9 major categories in both Chinese and English, including magazines, academic papers, research reports, etc.
            </p>

            <p>
                As shown in Table 1, even with the minimum visual token cap, DeepSeek-OCR 2 still achieved a leading performance of <strong>91.09%</strong>. Compared to the DeepSeek-OCR baseline model, performance improved by 3.73% using similar training data sources, validating the effectiveness of the new architecture design.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/evaluation.png"
                    alt="Evaluation Table"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                In addition to overall performance improvement, the Edit Distance (ED) on the <strong>Reading Order (R-order)</strong> metric also dropped significantly from 0.085 to 0.057. This indicates that the new DeepEncoder V2 can more effectively select and arrange initial visual tokens based on image information.
            </p>
            <p>
                Further, as shown in Table 2, under the same visual token budget (1120), DeepSeek-OCR 2's ED (0.100) in document parsing tasks is lower than Gemini-1.5 Pro (0.115). This further proves the new model's ability to ensure better performance while maintaining high visual token compression rates.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/distance.png"
                    alt="Distance Comparison"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Room for Improvement</h3>

            <p>
                The team conducted a detailed performance comparison between DeepSeek-OCR and DeepSeek-OCR 2 on 9 document types. Results show that DeepSeek-OCR 2 still has significant room for improvement, as shown in Table 3. In text recognition ED metrics, DeepSeek-OCR 2 outperforms DeepSeek-OCR in most scenarios, but still has obvious deficiencies in some types, such as newspaper documents, where its ED exceeds 0.13.
            </p>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/detail-comparison.png"
                    alt="Detailed Comparison"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>The team believes there are two main reasons:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Low visual token cap:</strong> This may affect recognition in extremely dense text documents like newspapers. This could be mitigated in the future by increasing the number of local crops.</li>
                <li><strong>Insufficient newspaper data:</strong> The current training set contains only about 250k related samples, which is still insufficient for training DeepEncoder V2.</li>
            </ul>
            <p>
                Of course, in the Reading Order (R-order) metric, DeepSeek-OCR 2 consistently outperforms DeepSeek-OCR across all categories, further validating the effectiveness of the proposed "Visual Causal Flow" encoder design.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Actual Application</h2>

            <p>
                DeepSeek-OCR mainly targets two types of production scenarios: online OCR services providing image/document reading capabilities for DeepSeek-LLM, and pre-training data pipelines for batch PDF processing.
            </p>
            <p>
                As shown in Table 4, compared to the previous model, DeepSeek-OCR 2 has significant improvements in practical usability:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Online User Logs:</strong> Repetition rate dropped from 6.25% to 4.17%.</li>
                <li><strong>PDF Data Production:</strong> Repetition rate dropped from 3.69% to 2.88%.</li>
            </ul>

            <div className="my-8 flex justify-center">
                <Image
                    src="/blog/deepseek/ocr-2/production.png"
                    alt="Production Metrics"
                    width={900}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            <p>
                These results further validate the effectiveness of the DeepSeek-OCR 2 architecture, especially its advantages in logical visual understanding.
            </p>
        </div>
    );
}
