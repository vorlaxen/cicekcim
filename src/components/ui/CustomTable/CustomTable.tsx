import { cn } from "@/utils";
import React from "react";

interface Column<T> {
    key: string;
    label: string;
    render?: (item: T) => React.ReactNode;
    type?: "string" | "number" | "date" | Record<string, string>;
    hideOnMobile?: boolean;
    priority?: number;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    className?: string;
}

const Table = <T,>({ data, columns, className }: TableProps<T>) => {
    if (!data.length) {
        return (
            <div className={cn(
                "text-center py-12 border rounded-lg border-black/10 dark:border-white/10",
                className
            )}>
                <h3 className="text-sm font-medium">No data found</h3>
            </div>
        );
    }

    const sortedColumns = [...columns].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));

    return (
        <div className="w-full overflow-x-auto">
            <table className={cn(
                "min-w-max w-full text-sm text-left rtl:text-right text-body",
                className
            )}>
                <thead className="border-b border-neutral-400 dark:border-neutral-900">
                    <tr>
                        {sortedColumns.map(col => (
                            <th
                                key={col.key}
                                className={cn(
                                    "px-4 py-3 text-left text-xs font-medium uppercase whitespace-nowrap",
                                    col.hideOnMobile && "hidden sm:table-cell"
                                )}
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors border-b border-neutral-400 dark:border-neutral-900"
                        >
                            {sortedColumns.map(col => {
                                let value = col.render ? col.render(row) : (row as any)[col.key];
                                let tooltip;

                                if (col.type && typeof col.type === "object") {
                                    tooltip = (col.type as Record<string, string>)[value];
                                }

                                return (
                                    <td
                                        key={col.key}
                                        className={cn(
                                            "px-4 py-4 whitespace-nowrap",
                                            col.hideOnMobile && "hidden sm:table-cell"
                                        )}
                                        title={tooltip}
                                    >
                                        {value}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
