import{_ as s,c as n,o as a,a as l}from"./app.fabd81e6.js";const i=JSON.parse('{"title":"\u5168\u5C40\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"globalConfig","slug":"globalconfig","link":"#globalconfig","children":[]},{"level":2,"title":"graphConfig","slug":"graphconfig","link":"#graphconfig","children":[]}],"relativePath":"config/global-config.md"}'),p={name:"config/global-config.md"},o=l(`<h1 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1">\u5168\u5C40\u914D\u7F6E <a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="globalconfig" tabindex="-1">globalConfig <a class="header-anchor" href="#globalconfig" aria-hidden="true">#</a></h2><p>container \u5168\u5C40\u8BBE\u7F6E</p><ul><li><strong>\u7C7B\u578B</strong></li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GlobalConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u7981\u7528\u53F3\u952E\u83DC\u5355</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;"> \u7981\u7528</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u7981\u7528</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">disableContextMenu</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u9F20\u6807\u6846\u9009</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u5F00\u542F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u5F00\u542F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rubberBand</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> graph \u5168\u5C40\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">config</span><span style="color:#676E95;"> { GlobalConfig }</span></span>
<span class="line"><span style="color:#676E95;"> *</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">graph</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Graph</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GlobalConfig</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><p><strong>\u8BE6\u7EC6\u4FE1\u606F</strong></p><p>\u7B2C\u4E00\u4E2A\u53C2\u6570 graph\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u914D\u7F6E\u5BF9\u8C61</p></li><li><p><strong>\u793A\u4F8B</strong></p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#82AAFF;">globalConfig</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    graph</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">graph</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">disableContextMenu</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    container</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="graphconfig" tabindex="-1">graphConfig <a class="header-anchor" href="#graphconfig" aria-hidden="true">#</a></h2><p>container \u5168\u5C40\u8BBE\u7F6E</p><ul><li><p><strong>\u7C7B\u578B</strong></p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GraphConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u53EA\u8BFB\u6A21\u5F0F (\u65E0\u6CD5\u8FDB\u884C\u62D6\u62FD\u62C9\u4F38\u7B49\u64CD\u4F5C)</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u542F\u52A8\u53EA\u8BFB\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u542F\u52A8\u53EA\u8BFB\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">readonly</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u8282\u70B9\u662F\u5426\u53EF\u4EE5\u6539\u53D8\u5927\u5C0F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u53EF\u4EE5\u6539\u53D8\u5927\u5C0F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u53EF\u4EE5\u6539\u53D8\u5927\u5C0F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cellResize</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u8282\u70B9\u662F\u5426\u53EF\u4EE5\u79FB\u52A8</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u53EF\u4EE5\u79FB\u52A8</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u53EF\u4EE5\u79FB\u52A8</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cellMove</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u8282\u70B9\u662F\u5426\u53EF\u4EE5\u65B0\u7684\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u53EF\u4EE5\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u53EF\u4EE5\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setConnectable</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u5BB9\u5668\u5927\u5C0F\u662F\u5426\u81EA\u9002\u5E94</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u81EA\u9002\u5E94</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u81EA\u9002\u5E94</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">containerResize</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u91CD\u590D\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u5F00\u542F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u5F00\u542F</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setMultigraph</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u662F\u5426\u53EF\u4EE5\u89E3\u6790html</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u53EF\u4EE5\u89E3\u6790</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u53EF\u4EE5\u89E3\u6790</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setHtmlLabels</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u662F\u5426\u5141\u8BB8\u79FB\u52A8 Vertex \u7684 Label</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u53EF\u4EE5\u79FB\u52A8</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u53EF\u4EE5\u79FB\u52A8</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setVertexLabelsMovable</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u662F\u5426\u5141\u8BB8\u8FDE\u7EBF\u7684\u76EE\u6807\u548C\u6E90\u662F\u540C\u4E00\u5143\u7D20</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">true</span><span style="color:#676E95;">  \u53EF\u4EE5\u79FB\u52A8</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span><span style="color:#676E95;"> \u4E0D\u53EF\u4EE5\u79FB\u52A8</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">default</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">false</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setAllowLoops</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> graphConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">graph</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Graph</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GraphConfig</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>\u8BE6\u7EC6\u4FE1\u606F</strong></p><p>\u7B2C\u4E00\u4E2A\u53C2\u6570 graph\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u914D\u7F6E\u5BF9\u8C61</p></li><li><p><strong>\u793A\u4F8B</strong></p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#82AAFF;">graphConfig</span><span style="color:#A6ACCD;">(graph</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">graph)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li></ul>`,9),e=[o];function c(t,r,y,C,D,A){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{i as __pageData,E as default};
