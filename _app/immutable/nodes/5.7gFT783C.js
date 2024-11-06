import{a as e,t as a}from"../chunks/disclose-version.CT4FqHsS.js";var l=a(`<article class="prose-gray prose-base text-white svelte-xngktj"><h1 class="svelte-xngktj">Writing Queries</h1> <h2 class="svelte-xngktj">Simple Queries</h2> <p>Base form of a query can be described as:</p> <code class="svelte-xngktj">*column* *operator* *value*</code> <p>For example</p> <code class="svelte-xngktj">artist = JDilla</code> <p>Which filters through all the rows where the "artist" is equal to "JDilla"</p> <h2 class="svelte-xngktj">Get Complex With It</h2> <p>You can add multiple queries together with either a "&" (and) or an "|" (or) symble</p> <code class="svelte-xngktj">artist =: pac | artist = Makaveli</code> <p>Returns a table where the artist either has "pac" in the string or is equal to "Makaveli"</p> <h1 class="svelte-xngktj">Symbol Table</h1> <table class="svelte-xngktj"><thead><tr><th class="svelte-xngktj">Word</th><th class="svelte-xngktj">Symbol</th><th class="svelte-xngktj">Description</th></tr></thead><tbody><tr><td class="svelte-xngktj">not</td><td class="svelte-xngktj">!T</td><td class="svelte-xngktj">Negates Operation</td></tr><tr><td class="svelte-xngktj">is / equals</td><td class="svelte-xngktj">=</td><td class="svelte-xngktj">Exact match</td></tr><tr><td class="svelte-xngktj">contains</td><td class="svelte-xngktj">=:</td><td class="svelte-xngktj">Left contains right (Nickolas Picklous =: Nick)</td></tr><tr><td class="svelte-xngktj">isin</td><td class="svelte-xngktj">:=</td><td class="svelte-xngktj">Right contains left (Nick := Nickolas Picklous)</td></tr><tr><td class="svelte-xngktj">lessthan</td><td class="svelte-xngktj">&lt;</td><td class="svelte-xngktj">"Less than" comparison of numbers or characters based on ASCII value of characters</td></tr><tr><td class="svelte-xngktj">morethan</td><td class="svelte-xngktj">&gt;</td><td class="svelte-xngktj">"Greater than" comparison of numbers or characters based on ASCII value of characters</td></tr><tr><td class="svelte-xngktj">lessthanequals</td><td class="svelte-xngktj">&lt;=</td><td class="svelte-xngktj">"Less than or equals" comparison of numbers or characters based on ASCII value of
					characters</td></tr><tr><td class="svelte-xngktj">morethanequals</td><td class="svelte-xngktj">&gt;=</td><td class="svelte-xngktj">"Greater than or equals" comparison of numbers or characters based on ASCII value of
					characters</td></tr><tr><td class="svelte-xngktj">or</td><td class="svelte-xngktj">|</td><td class="svelte-xngktj">Or boolean operation</td></tr><tr><td class="svelte-xngktj">and</td><td class="svelte-xngktj">&amp;</td><td class="svelte-xngktj">And boolean operation</td></tr><tr><td class="svelte-xngktj"><em>Parenthesis</em></td><td class="svelte-xngktj">()</td><td class="svelte-xngktj">Prioritizes statements inside parenthesis</td></tr><tr><td class="svelte-xngktj"><em>NA</em></td><td class="svelte-xngktj">"&lt;value&gt;"</td><td class="svelte-xngktj">Combines multiple words into single string. Necessary for multi-worded tokens, optional
					for single-worded tokens</td></tr><tr><td class="svelte-xngktj"><em>NA</em></td><td class="svelte-xngktj">^T</td><td class="svelte-xngktj">Makes statement case-sensitive; queries are case-insensitive by default</td></tr></tbody></table></article>`);function r(t){var s=l();e(t,s)}function n(t){r(t)}export{n as component};
