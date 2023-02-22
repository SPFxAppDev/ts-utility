

/**
 * Writes the specified TEXT string to the system clipboard
 * @param data The string to be written to the clipboard.
 * @since 1.3.0
 */
export default async function copyToClipboard(data: string): Promise<void> {
    await window.navigator.clipboard.writeText(data);
}