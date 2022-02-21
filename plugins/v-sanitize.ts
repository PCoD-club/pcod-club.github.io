import sanitizeHtml, { IOptions } from "sanitize-html";

export const FILTER_BASIC: IOptions = sanitizeHtml.defaults;
export const FILTER_INLINE: IOptions = {
  allowedTags: [
    "a",
    "b",
    "br",
    "code",
    "em",
    "i",
    "span",
    "strike",
    "strong",
    "u",
  ],
  allowedAttributes: {
    a: ["href", "target"],
    span: ["style"],
  },
  selfClosing: ["br"],
  allowedSchemes: ["ftp", "http", "https", "mailto"],
  parser: {
    decodeEntities: true,
  },
};
export const FILTER_NOTHING: IOptions = {
  allowedTags: false,
  allowedAttributes: false,
};
export const FILTER_STRIP: IOptions = {
  allowedTags: [],
  allowedAttributes: {},
};
const FILTERS = {
  strip: FILTER_STRIP,
  inline: FILTER_INLINE,
  nothing: FILTER_NOTHING,
  basic: FILTER_BASIC,
};

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive("sanitize", (el, binding) => {
    if (Array.isArray(binding.value)) {
      el.innerHTML = sanitizeHtml(binding.value[1], binding.value[0]);
    } else {
      if (binding.modifiers.strip) {
        el.innerHTML = sanitizeHtml(binding.value, FILTER_STRIP);
      } else if (binding.modifiers.basic) {
        el.innerHTML = sanitizeHtml(binding.value, FILTER_BASIC);
      } else if (binding.modifiers.inline) {
        el.innerHTML = sanitizeHtml(binding.value, FILTER_INLINE);
      } else if (binding.modifiers.nothing) {
        el.innerHTML = sanitizeHtml(binding.value, FILTER_NOTHING);
      } else {
        el.innerHTML = sanitizeHtml(binding.value);
      }
    }
  });

  const $sanitize = (dirty: string, mode = "") => {
    return sanitizeHtml(dirty, FILTERS[mode]);
  };

  type SanitizeHelper = typeof $sanitize & {
    [m in keyof typeof FILTERS]: (dirty: string) => string;
  };

  Object.keys(FILTERS).forEach((mode: keyof typeof FILTERS) => {
    $sanitize[mode] = (dirty) => $sanitize(dirty, mode);
  });

  return {
    provide: {
      sanitize: $sanitize as SanitizeHelper,
    },
  };
});
