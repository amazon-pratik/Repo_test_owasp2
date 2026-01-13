<?php

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: wp-sql-injection-audit
$result = $wpdb->get_var("SELECT meta_value FROM {$wpdb->prefix}table WHERE order_item_id = $order_item_id AND meta_key = $meta_key");
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: wp-sql-injection-audit
$get_question_options = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}table WHERE question_id = $id ", ARRAY_A);
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
// ok: wp-sql-injection-audit
$wpdb->prepare("SELECT $column FROM $this->table_name WHERE $this->primary_key = %d LIMIT 1;",(int) $row_id);
// {/fact}

?>