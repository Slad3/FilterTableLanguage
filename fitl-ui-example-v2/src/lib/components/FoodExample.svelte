<script lang="ts">
	import '$lib/stylesheets/fitlExamples.css';
	import { onMount } from 'svelte';

	import { fitl_filter } from 'fitl-js';

	import { foodData } from '$lib/data/foodData';
	import DataTable from '$lib/components/DataTable.svelte';

	let queryTextBox: any;
	let query = '';
	let result_table: Array<{ [key: string]: any }> = [];
	let order = ['name', 'category', 'color'];

	onMount(async () => {
		result_table = foodData;
		queryTextBox = document.getElementById('query');
	});

	function colorQueryBox(input: boolean) {
		queryTextBox.style.borderColor = input ? 'green' : 'red';
	}

	async function onQueryChange(event: { target: any }) {
		query = event.target.value;
		try {
			let temp = await fitl_filter(query, foodData);
			result_table = temp;

			colorQueryBox(true);
		} catch (error: any) {
			colorQueryBox(false);
			console.error(error);
		}
	}

	function example1() {
		query = 'category = fruit';
		onQueryChange({ target: { value: query } });
	}

	function example2() {
		query = 'name =: steak & category = meat';
		onQueryChange({ target: { value: query } });
	}
</script>

<main>
	<span class="form__group field">
		<input
			type="text"
			id="query"
			name="query"
			placeholder="Query"
			class="form__field"
			bind:value={query}
			on:input={onQueryChange}
			required
		/>
		<label for="query" class="form__label">Query</label>
	</span>
	<br />
	<br />
	<button class="filter_button example_button" on:click={example1}>All Fruits</button>
	<button class="filter_button example_button" on:click={example2}>All Kinds of Steak</button>
	<br />
	<span id="tableInfo">
		<div class="tableSizeInfo">
			Current Table Length: {result_table.length} | Original Table Length: {foodData.length}
		</div></span
	>

	<DataTable data={result_table} {order}></DataTable>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		width: 100%;
		margin: 0 auto;
	}
	.example_button {
		width: 30%;
	}
</style>
