
export const slugify = (text: string) => {
    return text
      .toLowerCase()                // Convert the string to lowercase letters
      .replace(/\s+/g, '-')         // Replace spaces with -
  }
